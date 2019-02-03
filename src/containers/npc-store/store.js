import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tradeItem } from '../../actions/player-actions';
import {newMessage} from '../../actions/';
import { displayCost } from '../../utils/currency-utils';
import StoreItem from './storeItem';

const rowStle = {display: "flex", flexDireciton: "row", justifyContent: "space-between"};

class Store extends Component {
	constructor(props) {
		super(props);

		console.log("store ", this.props)

		const randomIdx = Math.floor( Math.random() * this.props.storeOwner.greetings.length );

		this.state = {
			conversation: this.props.storeOwner.greetings[randomIdx],
			items: this.props.storeOwner.inventory,
			selectedItem: null,
			storeOwner: this.props.storeOwner,
		}

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyPress);
	}

	handleSelectItemClick(selectedItem,scope){

		const self = scope;
		console.log("handleSelectItemClick self ", self);
		self.setState({selectedItem})
	}

	handleKeyPress(e) {
		// store may not keyboard events...
		//console.log("code:",e.keyCode)
		/*
		switch (e.keyCode) {

			case ???:
				this.props.toggleFogMode();
				break;
			default:
				return;
		}
		*/
	}

	handleBuyItemClick(){
		console.log("buy item");

		if (this.state.selectedItem === null) return;

		const buyer = this.props.player;
		const seller = this.state.selectedNPC;
		const item = {...this.state.selectedItem, currency: this.state.selectedItem.cost};

		this.props.tradeItem(item, buyer, seller)

	}

	render() {
		const { npc, player } = this.props;

		const getItemsForSale = () => {
			return this.state.items.map( (item,idx) => {
				return (<StoreItem item={item} key={idx} handleClick={this.handleSelectItemClick} scope={this} />)
			})
		}


		return (
			<div>
				<div style={rowStle}>
					<div>{this.state.storeOwner.name}</div>
				</div>
				<div>{this.state.conversation}</div>
				<div>
					<div style={rowStle}>
						{getItemsForSale()}
					</div>
				</div>
				<div>
						<div>
							<button className="npcStoreButton" onClick={()=> this.handleBuyItemClick() }>Buy</button>
						</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({grid, player}) => {
	return {grid, player};
};

const mapDispatchToProps = (dispatch) => {
	return {
		tradeItem: (item, buyer, seller) => dispatch(tradeItem(item, buyer, seller)),
		newMessage: (message) => dispatch(newMessage(message))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);

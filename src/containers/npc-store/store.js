import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyItem, sellItem, tradeItem } from '../../actions/npc';

const defaultItems = [
	{name: "sword", cost: 30, currency: "copper"}
]

const rowStle = {display: "flex", flexDireciton: "row", justifyContent: "space-between"};

class Store extends Component {
	constructor(props) {
		super(props);

		console.log("store ", this.props)

		this.state = {
			conversation: "conversational text here...",
			items: defaultItems,
			selectedItem: defaultItems[0],
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

	handleItemClick(e){

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

	render() {
		const { npc, player } = this.props;


		const getItemsForSale = () => {
			return this.state.items.map( (item,idx) => {
				return (<div onClick={this.handleItemClick} key="btn">
									<div key={"name" + idx}>{item.name}</div>
									<div key={"cost" + idx}>{item.cost} {item.currency}</div>
							 </div>)
			})
		}


		return (
			<div className="panel">
				<div style={rowStle}>
					<div>
							<div>{this.state.selectedItem.name}</div>
							<div>{this.state.selectedItem.cost} {this.state.selectedItem.currency}</div>
							<div>
								<button className="npcStoreButton">Buy</button>
							</div>
					</div>
					<div>{this.state.storeOwner.name}</div>
				</div>
				<div>{this.state.conversation}</div>
				<div>
					<div style={rowStle}>
						{getItemsForSale()}
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
		//lookAround: (entities) => dispatch(lookAround(entities)),
		buyItem: (npcItem) => dispatch(buyItem(npcItem)),
		sellItem: (playerItem) => dispatch(sellItem(playerItem)),
		tradeItem: (playerItem, npcItem) => dispatch(tradeItem(playerItem, npcIte)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyItem, sellItem, tradeItem } from '../actions/npc';

const defaultItems = [
	{name: "sword", cost: 30, currency: "copper"}
]

class NPCStore extends Component {
	constructor() {
		super();

		this.state = {
			conversation: "conversational text here...",
			items: defaultItems,
			selectedItem: defaultItems[0],
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
			return this.state.items.map( item => {
				return (<div onClick={this.handleItemClick}>
									<div>{item.name}</div>
									<div>{item.cost} {item.currency}</div>
							 </div>)
			})
		}

		return (
			<div className="panel">
				<div style="display: flex; flex-direciton: row; justify-content: space-between">
					<div>
							<div>{this.state.selectedItem.name}</div>
							<div>{this.state.selectedItem.cost} {this.state.selectedItem.currency}</div>
							<button>buy</button>
					</div>
					<div>{npc.name}</div>
				</div>
				<div>this.state.conversation</div>
				<div>
					<div style="display: flex; flex-direciton: row; justify-content: space-between">
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

export default connect(mapStateToProps, mapDispatchToProps)(NPCStore);

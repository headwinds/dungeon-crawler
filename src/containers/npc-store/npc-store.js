import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyItem, sellItem, tradeItem } from '../../actions/npc';
import Store from './store';

const defaultItems = [
	{name: "sword", cost: 30, currency: "copper"}
]

const rowStle = {display: "flex", flexDireciton: "row", justifyContent: "space-between"};

class NPCStore extends Component {
	constructor() {
		super();

		this.state = {
			conversation: "conversational text here...",
			items: defaultItems,
			selectedItem: defaultItems[0],
			npcs: [],
			selectedNPC: null
		}

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyPress);
	}

	componentDidUpdate(nextProps) {
		window.addEventListener('keydown', this.handleKeyPress);

		console.log("npc-store componentDidUpdate", nextProps);

		if (nextProps.player.npcsAroundMe > 0) {

		}
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyPress);
	}

	componentWillReceiveProps(nextProps){
		console.log("npc-store componentDidReceiveProps", nextProps)
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

	handleSelectNPC(selectedNPC){

		this.setState({selectedNPC})
	}

	render() {
		const { npc, player } = this.props;

		// if there are multiple npcs around, first you need to pick one to interact with...
		const getPickNPC = () => {
			if (player.npcsAroundMe.length > 0 && this.state.selectedNPC === null) {
				const list = player.npcsAroundMe.map( (npc, idx) => {
					return (
						<div key={idx}
								 className="selectItem"
								 onClick={() => this.handleSelectNPC(npc)}>
							{npc.name}
						</div>
					)
				})

				return (
					<div>
						<div>Who would you like to speak to?</div>
						{list}
					</div>
				)


			} else return null;
		}

		// the player has picked an NPC and this NPC can trade items
		const getStore = () => {
			if ( this.state.selectedNPC !== null ) {
				const storeOwner = this.state.selectedNPC;
				console.log("owner: ", storeOwner)
				console.log("this.state: ", this.state)
				return <Store storeOwner={storeOwner} />
			} else {

			}

		}

		return (
			<div className="panel">
			  {getPickNPC()}
				{getStore()}
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

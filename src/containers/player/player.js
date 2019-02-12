import React, { Component } from 'react';
import { connect } from 'react-redux';

import { lookAround } from '../../actions/examine-actions';
import { talkToNPC, interactWithNeutral } from '../../actions/player-actions';
import { getEntitiesAroundMe } from '../../utils/entity-utils.js';

import Cell from '../../components/cell';
import npcTypes from '../../types/npcTypes';

class Player extends Component {
	constructor() {
		super();
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyPress);
	}

	render() {

		const {key, cell, distance, zone, transit, visible} = this.props.cellProps;

		return (
				<Cell
					key={key}
					cell={cell}
					distance={distance}
					zone={zone}
					transit={transit}
					visible={visible}
					/>
		);
	}
	handleKeyPress(e) {

		const {dispatchLookAround, dispatchTalkToNPC, dispatchInteractWithNeutral} = this.props;

		console.log("code:",e.keyCode)
		switch (e.keyCode) {
			case 76:
				dispatchLookAround(this.props.grid.entities);
				break;
			case 84:
				const npcsAroundMe = getEntitiesAroundMe(this.props.grid.entities, "npc")
				if ( npcsAroundMe.length > 0) dispatchTalkToNPC(npcsAroundMe);
				break;
			case 72:
				//this.props.lookAround(this.props.grid.entities);
				const neutralsAroundMe = getEntitiesAroundMe(this.props.grid.entities, "neutral")
				if ( neutralsAroundMe.length > 0) dispatchInteractWithNeutral(neutralsAroundMe, "harvest");
				break;
			default:
				return;
		}
	}
}

const mapStateToProps = ({ui, grid, player}) => {
	return { fogMode: ui.fogMode, grid, player};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchLookAround: (entities) => dispatch(lookAround(entities)),
		dispatchTalkToNPC: (npcsAroundMe) => dispatch(talkToNPC(npcsAroundMe)),
		dispatchInteractWithNeutral: (neutralsAroundMe, interaction) => dispatch(interactWithNeutral(neutralsAroundMe, interaction))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

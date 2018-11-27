import React, { Component } from 'react';
import { connect } from 'react-redux';

import { lookAround } from '../actions/examine';
import { talkToNPC } from '../actions/player';
import { getNPCsAroundMe } from '../utils/npc-utils';

import Cell from '../components/cell';

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
		//console.log("code:",e.keyCode)
		switch (e.keyCode) {
			case 76:
					this.props.lookAround(this.props.grid.entities);
					break;
			case 84:
					const npcsAroundMe = getNPCsAroundMe(this.props.grid.entities)
					if ( npcsAroundMe.length > 0) this.props.talkToNPC(npcsAroundMe);
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
		lookAround: (entities) => dispatch(lookAround(entities)),
		talkToNPC: (npcsAroundMe) => dispatch(talkToNPC(npcsAroundMe))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

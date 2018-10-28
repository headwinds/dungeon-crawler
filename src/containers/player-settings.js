import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleFogMode, restartGame } from '../actions';
import { lookAround } from '../actions/examine';
import { talkToNPC } from '../actions/npc';
import { getNPCsAroundMe } from '../utils/npc-utils';

class PlayerSettings extends Component {
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
		const { fogMode, restartGame, toggleFogMode } = this.props;
		return (
			<div className="panel">
				<div className="score-item">
					<input
						onChange={toggleFogMode}
						id="toggle"
						type="checkbox"
						checked={fogMode}
						/>
					<label htmlFor="toggle">
					Toggle fog mode
					</label>
				</div>
				<div className="score-item">
					<div onClick={restartGame} className="restart-btn"></div>
					<span onClick={restartGame} className="setting-label">Restart</span>
				</div>
			</div>
		);
	}
	handleKeyPress(e) {
		//console.log("code:",e.keyCode)
		switch (e.keyCode) {
			// north
			case 70:
				this.props.toggleFogMode();
				break;
			case 82:
				this.props.restartGame();
				break;
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
		toggleFogMode: () => dispatch(toggleFogMode()),
		restartGame: () => dispatch(restartGame()),
		lookAround: (entities) => dispatch(lookAround(entities)),
		talkToNPC: (npcsAroundMe) => dispatch(talkToNPC(npcsAroundMe))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSettings);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleFogMode, restartGame, lookAround } from '../actions';

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

		const entities = this.props.grid.entities;

		const entitiesBesidePlay = [];
		let aroundMe = '';
		let iconClass = '';

		entities.map(row => {
			const closeBy = row.filter( entity => entity.distanceFromPlayer === 1);
			if (closeBy.length > 0) entitiesBesidePlay.push(closeBy)
		});

		if (entitiesBesidePlay.length > 0) {

			const enemy = {
				1:"Rat",
				2:"Kobold",
				3:"Dark Elf",
				4:"Troll",
				5:"Boss"
			}

			entitiesBesidePlay.map(entities => {
				entities.map( entity => {
					const type = (entity.type === 0) ? "wall" : entity.type;
					if (type !== "floor" && type !== "wall") {
						console.log("entity: ", entity)
						let about = '';
						switch(entity.type) {
							case "weapon" :
								about = " " + entity.name + " " + entity.damage
								break;
							case "boss" :
							case "enemy" :
									about = " " + enemy[entity.level] + " lvl " + entity.level + " health " + entity.health;
									break;
							case "exit" :
								about = " exit ";
								break;
							case "potion" :
									about = " potion ";
									break;
						}
						aroundMe += about;
						iconClass = entity.type;
					}
				})
			})
		}

		if (aroundMe === '') {
			aroundMe = "not much to see here";
			iconClass = 'floor';
		}

		switch (e.keyCode) {
			// north
			case 70:
				this.props.toggleFogMode();
				break;
			case 82:
				this.props.restartGame();
				break;
			case 76:
					this.props.lookAround("Look", aroundMe, iconClass);
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
		lookAround: (action, aroundMe, iconClass) => dispatch(lookAround(action, aroundMe, iconClass)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSettings);

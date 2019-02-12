import React, { Component } from 'react';
import { connect } from 'react-redux';

class Quest extends Component {
	constructor() {
		super();

		this.state = {
			itemSelected: null, 
		}

	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	handleItemSelected(){

	}

	render() {
		const { model } = this.props;

		console.log("pin: ", model);

		const floorTileSize = 18;
		
		const questStyle = {
			display: "block",
			position: "absolute",
			top: `${model.y * floorTileSize - 20}px`,
			left: `${model.x * floorTileSize + 10}px`,
			background: "pink",
			// /width: floorTileSize,
			color: "#000",
			padding: 5,
			height: floorTileSize,
			opacity: (model.y) ? 1 : 0
		}

		return (
			<div id="quest" style={questStyle}>
				I'm here!
			</div>
		);
	}
}

export default Quest;
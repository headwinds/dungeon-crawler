import React, { Component } from 'react';
import { connect } from 'react-redux';

class PaperDoll extends Component {
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
		const { player } = this.props;

		console.log("Player: ", player.toJS());

		const avatarPortrait = {display: "block",
								background: "#333",
								width: 80,
								height: 80};

		const avatarName = {display: "block",
							width: 80,
							height: 80};						

		return (
			<div className="panel" style={{flexDirection:"row", justifyContent: "flex-start", marginBottom: 0}}>
				<div id="portrait" style={avatarPortrait}></div>
				<div style={{marginLeft: 10}}>
					<div id="name" style={avatarName}>{player.get("name")}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({player}) => {
	return {player};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PaperDoll);
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

		return (
			<div className="panel">
				{player.get("name")}
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
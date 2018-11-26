import React, { Component } from 'react';
import { connect } from 'react-redux';
import Inventory from '../components/Inventory';

class Backpack extends Component {
	constructor() {
		super();

	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render() {
		const { player } = this.props;
    console.log("Backpack render: ", player.inventory);
		return (
			<div className="panel">
				<Inventory items={player.inventory} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Backpack);

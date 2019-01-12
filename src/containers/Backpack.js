import React, { Component } from 'react';
import { connect } from 'react-redux';
import Inventory from '../components/inventory';
import ItemInteractions from '../components/item-interactions';

class Backpack extends Component {
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
    console.log("Backpack render: ", player.inventory);
		return (
			<div className="panel">
				<Inventory items={player.inventory} handleItemSelected={this.handleItemSelected} />
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

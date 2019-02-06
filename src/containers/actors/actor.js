import React, { Component } from 'react';
import { connect } from 'react-redux';

class Actor extends Component {
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

		return (
			<div className="panel">
				<img src={model.get("skin")} />
			</div>
		);
	}
}

export default Actor;
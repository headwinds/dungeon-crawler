import React, { Component } from 'react';
import { connect } from 'react-redux';


class ItemInteractions extends Component {
	constructor() {
		super();

    this.state = {
        isOpen: false
    }

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyPress);
	}

  toggleOpen(){

    const isOpen = !this.state.isOpen;

    this.setState({isOpen})
  }

	handleMouseOver(){

	}

	handleMouseOut(){

	}

	handleEquipClick(item){

	}

	handleDiscardClick(item){

	}

	handleTradeClick(item){

	}

	handleCraftClick(item){

	}

	render() {
		return (
			<div>

			</div>
		);
	}
	handleKeyPress(e) {

		// equip or discard item...

    console.log("keyCode: ", e.keyCode);
		switch (e.keyCode) {

			case 73:

				break;
			default:
				return;
		}
	}
}

const mapStateToProps = ({player}) => {
	return {player};
};

const mapDispatchToProps = (dispatch) => {
	return {

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemInteractions);

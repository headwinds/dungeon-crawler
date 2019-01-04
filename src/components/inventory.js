import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './inventory-item';

class Inventory extends Component {
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

	handleClick(){

	}


	render() {
		const { items } = this.props;
		const list = items.map((item, idx) => {
				return (<Item key={idx} 
											item={item}
											handleMouseOver={this.handleMouseOver}
											handleMouseOut={this.handleMouseOver}
											handleClick={this.handleClick}></Item>)
		})

		return (
			<div style={{display: "flex", flexDirection: "row"}}>
				{list}
			</div>
		);
	}
	handleKeyPress(e) {
    console.log("keyCode: ", e.keyCode);
		switch (e.keyCode) {

			case 73:
			  this.toggleOpen();
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

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);

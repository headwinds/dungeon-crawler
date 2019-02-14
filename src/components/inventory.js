import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./inventory-item";

/*
		<Score
				iconClass="weapon"
				title="Weapon"
				value={`${player.weapon.name} (+${player.weapon.damage})`}
				/>

*/

class Inventory extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  toggleOpen() {
    const isOpen = !this.state.isOpen;

    this.setState({ isOpen });
  }

  handleMouseOver() {}

  handleMouseOut() {}

  handleClick() {}

  render() {
    const { items } = this.props;

    console.log("inventory items: ", items)

    const inventorySlots = [0, 1, 2, 3];

    const list = inventorySlots.map(idx => {
      const item = items[idx];

      const slotStyle = {
        display: "block",
        width: 50,
				height: 50,
				margin: 5,
				padding: 0,
				background: "#333"
      };

      if (item) {
        return (
          <div style={slotStyle} key={idx}>
            <Item
              key={idx}
              item={item}
              handleMouseOver={this.handleMouseOver}
              handleMouseOut={this.handleMouseOver}
              handleClick={this.handleClick}
            />
          </div>
        );
      } else {
        return <div style={slotStyle} key={idx} />;
      }

    });

    return <div style={{ display: "flex", flexDirection: "row" }}>{list}</div>;
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

const mapStateToProps = ({ player }) => {
  return { player };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);

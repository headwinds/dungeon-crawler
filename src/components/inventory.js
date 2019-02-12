import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./inventory-item";

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
          <div style={slotStyle}>
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
        return <div style={slotStyle} />;
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

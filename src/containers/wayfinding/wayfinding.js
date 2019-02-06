import React, { Component } from "react";
import { connect } from "react-redux";
import Pin from "./pin";

class Wayfinding extends Component {
  constructor() {
    super();

    this.state = {
      itemSelected: null
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleItemSelected() {}

  render() {
    const { player, grid } = this.props;

    const wayfindingStyle = {
      display: "block",
      position: "absolute",
      zIndex: 4,
      background: "transparent",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
    };

    const pinModel = {x: grid.playerPosition[0], y: grid.playerPosition[1]};

    const getPins = () => {
      return <Pin model={pinModel} />
    }

    return <div id="wayfinding" style={wayfindingStyle}>{getPins()}</div>;
  }
}

const mapStateToProps = ({ player, grid }) => {
  return { player, grid };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wayfinding);

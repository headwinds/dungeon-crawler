import React, { Component } from "react";
import { connect } from "react-redux";

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
    const { player } = this.props;

    const wayfindingStyle = {
      display: "block",
      position: "absolute",
      zIndex: 3,
      background: "transparent",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
    };

    return <div style={wayfindingStyle} />;
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
)(Wayfinding);

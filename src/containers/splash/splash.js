import React, { Component } from "react";
import { connect } from "react-redux";

class Splash extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleItemSelected() {}

  render() {
    const { player, grid } = this.props;

    const splashStyle = {
      display: "block",
      position: "absolute",
      zIndex: 4,
      background: "transparent",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
    };

    return <div id="splash" style={splashStyle}>splash</div>;
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
)(Splash);
import React, { Component } from "react";
import { connect } from "react-redux";
import Score from "../../components/score";

class PaperDoll extends Component {
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

    console.log("Player: ", player.toJS());

    const avatarPortrait = {
      display: "block",
      background: "#333",
      width: 80,
      height: 80
    };

    const avatarName = { display: "block", width: 80 };

    return (
      <div
        className="panel"
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginBottom: 0
        }}
      >
        <div id="portrait" style={avatarPortrait} />
        <div style={{ marginLeft: 10 }}>
          <div id="name" style={avatarName}>
            {player.get("name")}
          </div>
          <Score
            iconClass="potion"
            title="Health"
            value={player.get("health")}
          />
          <Score iconClass="triangle" title="XP" value={player.get("xp")} />
          <Score
            iconClass="triangle"
            title="XP to next lvl"
            value={100 - (player.xp % 100)}
          />
        </div>
      </div>
    );
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
)(PaperDoll);

import { connect } from "react-redux";
import React, { Component } from "react";
import config from "../config.js";
import Backpack from "./backpack";
import Game from "./game";
import Header from "../components/header";
import Messages from "./messages";
import NPCStore from "./npc-store/npc-store";
import PlayerSettings from "./player/player-settings";
import PaperDoll from "./player/paper-doll";
import Scoreboard from "../components/scoreboard";
import Tips from "./tips";
import axios from "axios";
import Wayfinding from "./wayfinding/wayfinding.js";
import Actors from "./actors/actors.js";
import {twitterAuth} from "../actions/user-actions";

class DungeonCrawler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requiresAuthentication: config.BACKEND === "python",
      authenticated: false,
      greet: "",
      authenticateCheckComplete: false
    };
  }

  componentDidMount() {
    if (this.state.requiresAuthentication) this.handleTwitterLoginClick();
  }

  componentWillReceiveProps(nextProps) {
    //if (this.state.requiresAuthentication) this.handleTwitterLoginClick();
    if (nextProps.authenticated !== null) {
      this.state.authenticated = nextProps.user
    }
  }

  handleTwitterLoginClick() {
    const self = this;
    const {triggerTwitterAuth} = this.props;

    if (document.location.port !== "3000") triggerTwitterAuth();
  }

  render() {
    const { grid, player } = this.props;

    const sidebarClass =
      config.VP_TYPE === "full" ? "sidebar_fullscreen" : "sidebar";
    const app = config.VP_TYPE === "full" ? "app_fullscreen" : "app";

    const getTipWithSidebar = () => {
      if (!config.TIPS_ALONG_BOTTOM) return <Tips />;
      else return null;
    };

    const getTipsAtBottom = () => {
      if (config.TIPS_ALONG_BOTTOM) return <Tips />;
      else return null;
    };

    const getSignin = () => {
      // proxy in package json doesn't seem to work with this port 
      if (document.location.port === "3000") {  

        return (
          <div className="signinContainer" style={{ margin: 20 }}>
            <PaperDoll />
          </div>
        );

      } else {
        if (
          this.state.requiresAuthentication &&
          this.state.authenticateCheckComplete &&
          !this.state.authenticated
        ) {
          return (
            <div className="signinContainer" style={{ margin: 20 }}>
              <a
                href="/api/twitter/auth"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer"
                }}
              >
                Signin with Twitter
              </a>
            </div>
          );
        } else if (
          this.state.requiresAuthentication &&
          this.state.authenticateCheckComplete &&
          this.state.authenticated
        ) {
          return (
            <div className="signinContainer" style={{ margin: 20 }}>
              <PaperDoll />
            </div>
          );
        } else return null;
      }
    };

    return (
      <div>
        <Header level={grid.dungeonLevel} />
        <div id={app}>
          <Wayfinding />
          <Actors />
          <Game />
          <div className={sidebarClass}>
            {getSignin()}
            <div className="npcStore">
              <NPCStore />
            </div>
            <div className="backpack">
              <Backpack />
            </div>
            <Scoreboard player={player} grid={grid} />
            <PlayerSettings />
            <Messages />
            {getTipWithSidebar()}
          </div>
        </div>
        {getTipsAtBottom()}
      </div>
    );
  }
}

const mapStateToProps = ({ ui, grid, player }) => {
  return { ui, grid, player };
};

const mapDispatchToProps = (dispatch) => {
	return {
		triggerTwitterAuth: () => dispatch(twitterAuth())
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(DungeonCrawler);

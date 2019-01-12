import { connect } from 'react-redux';
import React, { Component } from 'react';
import config from '../config.js';
import Backpack from './backpack';
import Game from './game';
import Header from '../components/header';
import Messages from './messages';
import NPCStore from './npc-store/npc-store';
import PlayerSettings from './player-settings';
import Scoreboard from '../components/scoreboard';
import Tips from './tips';
import axios from 'axios';

class DungeonCrawler extends Component {
	constructor(props) {
		super(props);

		this.state = {
			requiresAuthentication: (config.BACKEND === "python"),
			authenticated: false,
			greet: "",
			authenticateCheckComplete: false,
		}
	}

	componentDidMount(){
		console.log("DungeonCrawler", this.state);
		if (this.state.requiresAuthentication) this.handleTwitterLoginClick();
	}

	handleTwitterLoginClick() {

		console.log("handleTwitterLoginClick", this.state);

		const self = this;

		const url = (document.domain === "127.0.0.1") ? 'http://127.0.0.1:5000/api/twitter/auth' : 'https://' + document.domain +  '/api/twitter/auth'
		
		let authenticated, greet, authenticateCheckComplete;

		axios.get(url).then( response => {
  
			  console.log("Twitter response: ", response.data);
			  if (response.data.screen_name) {
				authenticated = true;
				greet = response.data.screen_name + ", shall we begin?";
			  }            
			}
		  ).catch(error => {
  
			console.log("Twitter error: ", error);         
			this.errored = error
			greet = "";
			authenticated = false;

		  }).finally(() => {
				
			authenticateCheckComplete = true;

			self.setState({
				authenticated,
				greet,
				authenticateCheckComplete})
		})
	}
	
	render() {
	 
		const {grid, player} = this.props;

		const sidebarClass = (config.VP_TYPE === "full") ? "sidebar_fullscreen" : "sidebar";
		const app = (config.VP_TYPE === "full") ? "app_fullscreen" : "app";

		const getTipWithSidebar = () => {
			if (!config.TIPS_ALONG_BOTTOM) return (<Tips/>)
			else return null;
		}

		const getTipsAtBottom = () => {
			if (config.TIPS_ALONG_BOTTOM) return (<Tips/>)
			else return null;
		}

		const getSignin = () => {
			
			if (this.state.requiresAuthentication 
				&& this.state.authenticateCheckComplete 
				&& !this.state.authenticated) {
				return (
					<div className="signinContainer" style={{margin: 20}}>
						<a href="/api/twitter/auth" style={{color: "white", textDecoration: "none", cursor: "pointer"}}>Signin with Twitter</a>
					</div>
				)
			} else if (this.state.requiresAuthentication 
				&& this.state.authenticateCheckComplete 	
				&& this.state.authenticated) {
				return (
					<div className="signinContainer" style={{margin: 20}}>
						<p>{this.state.greet}</p>
					</div>
				)
			} else return null;
		}

		console.log("config: ", config.BACKEND);

		return (
			<div>
				<Header level={grid.dungeonLevel}/>
				<div id={app}>
					<Game/>
						<div className={sidebarClass}>
							{getSignin()}
							<div className="npcStore">
								<NPCStore />
							</div>
							<div className="backpack">
								<Backpack />
							</div>
							<Scoreboard player={player} grid={grid}/>
							<PlayerSettings/>
							<Messages/>
							{getTipWithSidebar()}
						</div>
				</div>
				{getTipsAtBottom()}
			</div>);
	};
};

const mapStateToProps = ({ ui, grid, player }) => {
	return { ui, grid, player };
};

export default connect(mapStateToProps)(DungeonCrawler);

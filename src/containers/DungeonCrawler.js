import { connect } from 'react-redux';
import React from 'react';
import config from '../config.js';

import Backpack from './backpack';
import Game from './game';
import Header from '../components/header';
import Messages from './messages';
import NPCStore from './npc-store/npc-store';
import PlayerSettings from './player-settings';
import Scoreboard from '../components/scoreboard';
import Tips from './tips';

const DungeonCrawler = ({grid, player}) => {
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

	return (
		<div>
			<Header level={grid.dungeonLevel}/>
			<div id={app}>
				<Game/>
					<div className={sidebarClass}>
					<div className="npcStore">
						<NPCStore />
					</div>
					<div class="backpack">
						<Backpack />
					</div>
					<Scoreboard player={player} grid={grid}/>
					<PlayerSettings/>
					<Messages/>
					{getTipWithSidebar()}
				</div>
			</div>
			{getTipsAtBottom()}
		</div>
	);
};

const mapStateToProps = ({ ui, grid, player }) => {
	return { ui, grid, player };
};

export default connect(mapStateToProps)(DungeonCrawler);

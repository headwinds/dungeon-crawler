import React from 'react';
import Score from './score';
import config from '../config.js';

export default ({ grid, player }) => {
	const panelClass = (config.VP_TYPE === "full") ? "panel_fullscreen" : "panel";
	const classes = `${panelClass} scoreboard`;
	return (
		<div className={classes}>
			<Score
				iconClass="potion"
				title="Health"
				value={player.health}
				/>
			<Score
				iconClass={`back-${grid.dungeonLevel}`}
				title="Zone"
				value={`${grid.dungeonLevel} - ${grid.dungeon.exitsComplete}`}
				/>
			<Score
				iconClass="weapon"
				title="Weapon"
				value={`${player.weapon.name} (+${player.weapon.damage})`}
				/>
				<Score
					iconClass="shield"
					title="Amour"
					value={`${player.shield.name} (+${player.shield.protection})`}
					/>
			<Score
					iconClass="gold"
					title={config.CURRENCY_GOLD_LABEL}
					value={`${player.currency.gold}`}
					/>
			<Score
					iconClass="silver"
					title={config.CURRENCY_SILVER_LABEL}
					value={`${player.currency.silver}`}
					/>
			<Score
					iconClass="copper"
					title={config.CURRENCY_COPPER_LABEL}
					value={`${player.currency.copper}`}
					/>
			<Score
				iconClass="player"
				title="Level"
				value={Math.floor(player.xp / 100)}
				/>
			<Score
				iconClass="triangle"
				title="XP to level up"
				value={100 - player.xp % 100}
				/>
				<Score
					iconClass={player.examining.iconClass}
					title={player.examining.action}
					value={player.examining.aroundMe}
					/>
		</div>
	);
};

import _ from 'lodash';
import * as c from '../constants/settings';
import weaponTypes from '../types/weaponTypes';
import shieldTypes from '../types/shieldTypes';
import enemyTypes from '../types/enemyTypes';
import neutralTypes from '../types/neutralTypes';
import potionTypes from '../types/potionTypes';
import npcTypes from '../types/npcTypes';

export default (gameMap, level = 1) => {
	// 1. create the entities
	const bosses = [];
	if (level === 4) {
		bosses.push({
			health: 400,
			level: 5,
			type: 'boss'
		});
	}

	const npcTrader = npcTypes.filter( npc => npc.profession.toLowerCase() === "trader")[0];
	const npcs = [];
	for (let i = 0; i < 30; i++) {
		npcs.push({...npcTrader}); // if you don't use spread, it will create an immutable tile and the distance calc will fail
	}

	const enemies = [];
	for (let i = 0; i < 7; i++) {
		enemies.push({
			health: level * 30 + 40,
			// half of the enememies will be a level higher or lower (except on
			// level 1, where ~1/4 enemies are a level higher)
			level: _.random(level, _.random(level - 1 ? level - 1 : level, level + 1)),
			type: 'enemy',
			name: enemyTypes[level]
		});
	}

	// not enemies but will attack if attacked 
	// animals like deer can be farmed  
	// but should be able pass by any neutral without combat 
	const neutral = [];
	for (let i = 0; i < 7; i++) {
		neutral.push({
			health: level * 30 + 40,
			// half of the enememies will be a level higher or lower (except on
			// level 1, where ~1/4 enemies are a level higher)
			level: _.random(level, _.random(level - 1 ? level - 1 : level, level + 1)),
			type: 'neutral',
			name: neutralTypes[level]
		});
	}

	const exits = [];
	if (level < 4) {
		exits.push({
			type: 'exit'
		});
	}

	const players = [
		{
			type: 'player'
		}
	];

	const healthPotion = potionTypes.filter( potion => potion.modifies === "health")[0];
	const potions = [];
	for (let i = 0; i < 5; i++) {
		potions.push({...healthPotion});
	}

	const weapons = [];
	// weapon types will vary based on the level passed to the parent function
	const qualifyingWeapons = weaponTypes
		.filter(weapon => weapon.damage < level * 10 + 10)
			.filter(weapon => weapon.damage > level * 10 - 10);
	for (let i = 0; i < 3; i++) {
		const weapon = Object.assign({}, qualifyingWeapons[_.random(0, qualifyingWeapons.length - 1)]);
		weapon.type = 'weapon';
		weapons.push(weapon);
	}

	const shields = [];
	// shields act like weapons except add protection instead of damage
	const qualifyingShields = shieldTypes
		.filter(shield => shield.protection < level * 10 + 10)
			.filter(shield => shield.protection > level * 10 - 10);
	for (let i = 0; i < 3; i++) {
		const shield = Object.assign({}, qualifyingShields[_.random(0, qualifyingShields.length - 1)]);
		shield.type = 'shield';
		shields.push(shield);
	}

	// 2. randomly place all the entities on to floor cells on the game map.

	// we'll need to return the players starting co-ordinates
	let playerPosition = [];
	[	potions,
		enemies,
		neutral,
		weapons,
		shields,
		exits,
		players,
		npcs,
		bosses].forEach(entities => {
		while (entities.length) {
			const x = Math.floor(Math.random() * c.GRID_WIDTH);
			const y = Math.floor(Math.random() * c.GRID_HEIGHT);
			if (gameMap[y][x].type === 'floor') {
				if (entities[0].type === 'player') {
					playerPosition = [x, y];
				}
				gameMap[y][x] = entities.pop();
			}
		}
	});

	// 3. we can now replace doors with floors
	// what do doors look like? do they need keys? do they hide what's behind them?!
	// So they don't hide the contents behind them and they act like potions meaning they disappear when crossed.
	// we should implement doors that hide the things inside when closed and some doors should be locked requiring the right key
	for (let i = 0; i < gameMap.length; i++) {
		for (let j = 0; j < gameMap[0].length; j++) {
			if (gameMap[i][j].type === 'door') {
			 	gameMap[i][j].type = 'floor';
			}
		}
	}
	return {entities: gameMap, playerPosition};
};

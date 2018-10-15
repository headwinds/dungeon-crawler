import _ from 'lodash';
import * as c from '../constants/settings';

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

	const enemies = [];
	for (let i = 0; i < 7; i++) {
		enemies.push({
			health: level * 30 + 40,
			// half of the enememies will be a level higher or lower (except on
			// level 1, where ~1/4 enemies are a level higher)
			level: _.random(level, _.random(level - 1 ? level - 1 : level, level + 1)),
			type: 'enemy'
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

	const potions = [];
	for (let i = 0; i < 5; i++) {
		potions.push({ type: 'potion', modifies: 'health', by: 5 });
	}

	const shieldTypes = [
		{
			name: 'Hat',
			protection: 1
		},
		{
			name: 'Bracers',
			protection: 5
		},
		{
			name: 'Rusty Shield',
			protection: 10
		},
		{
			name: 'Wooden Shield',
			protection: 12
		},
		{
			name: 'Leather Shield',
			protection: 20
		},
		{
			name: 'Chain Shield',
			protection: 25
		},
		{
			name: 'Plate Shield',
			protection: 40
		},
		{
			name: 'Elven Shield',
			protection: 50
		}
	];

	const weaponTypes = [
		{
			name: 'Big Stick',
			damage: 10
		},
		{
			name: 'Club',
			damage: 15
		},
		{
			name: 'Rusty Sword',
			damage: 20
		},
		{
			name: 'Butcher Knife',
			damage: 25
		},
		{
			name: 'Mace',
			damage: 30
		},
		{
			name: 'Flail',
			damage: 35
		},
		{
			name: 'Long Sword',
			damage: 40
		},
		{
			name: 'Broad Sword',
			damage: 50
		}
	];

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
	[potions, enemies, weapons, shields, exits, players, bosses].forEach(entities => {
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
	for (let i = 0; i < gameMap.length; i++) {
		for (let j = 0; j < gameMap[0].length; j++) {
			if (gameMap[i][j].type === 'door') {
			 	gameMap[i][j].type = 'floor';
			}
		}
	}
	return {entities: gameMap, playerPosition};
};

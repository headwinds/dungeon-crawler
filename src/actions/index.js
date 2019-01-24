import _ from 'lodash';
import { batchActions } from 'redux-batched-actions';
import { addCurrency, removeCurrency } from './currency';
import createMap from '../bin/game-map-creator';
import populateEntities from '../bin/entity-creator';
import * as t from '../constants/action-types';
import config from '../config.js';
import worldsets from '../worldsets/worldsets';

const gameWorldSeq = worldsets[config.OWNER];

function addShield(payload) {
	return {
		type: t.ADD_SHIELD,
		payload
	};
}

function removeShield(payload) {
	return {
		type: t.REMOVE_SHIELD,
		payload
	};
}

function addWeapon(payload) {
	return {
		type: t.ADD_WEAPON,
		payload
	};
}

function removeWeapon(payload) {
	return {
		type: t.REMOVE_WEAPON,
		payload
	};
}

function addXP(payload) {
	return {
		type: t.ADD_XP,
		payload
	};
}

function changeEntity(entity, coords) {
	return {
		type: t.CHANGE_ENTITY,
		payload: { entity, coords }
	};
}

function changePlayerPosition(payload) {
	return {
		type: t.CHANGE_PLAYER_POSITION,
		payload
	};
}

export function createLevel(level) {
	return {
		type: t.CREATE_LEVEL,
		payload: populateEntities(createMap(), gameWorldSeq, level)
	};
}

function modifyHealth(payload) {
	return {
		type: t.MODIFY_HEALTH,
		payload
	};
}

export function newMessage(payload) {
	return {
		type: t.NEW_MESSAGE,
		payload
	};
}

export function restart() {
	return {
		type: t.RESTART
	};
}

export function updateDungeon(payload) {
	return {
		type: t.UPDATE_DUNGEON,
		payload
	};
}

export function setDungeonLevel(level, transit) {
	return {
		type: t.SET_DUNGEON_LEVEL,
		payload: {
			level,
			transit
		}
	};
}

export function setEndGame(payload) {
	return {
		type: t.SET_END_GAME,
		payload
	};
}

export function resetDungeon() {
	return {
		type: t.RESET_DUNGEON
	};
}

export function toggleFogMode() {
	return {
		type: t.TOGGLE_FOG_MODE
	};
}

// a thunk!
export default (vector) => {
	return (dispatch, getState) => {
		const { grid, player } = getState();

		// cache some useful variables
		const [ x, y ] = grid.playerPosition.slice(0); // get current location
		const [ vectorX, vectorY ] = vector; // get direction modifier
		const newPosition = [vectorX + x, vectorY + y]; // define where we're moving to
		const newPlayer = grid.entities[y][x];
		const destination = grid.entities[y + vectorY][x + vectorX]; // whats in the cell we're heading to
		// store the actions in array to be past to batchActions
		const actions = [];

		// move the player unless destination is an enemy or permanent fixture like a wall (cell 0) or building
		if (destination.type
				&& destination.type !== 'enemy'
					&& destination.type !== 'boss') {

			// players should be able to pass through npcs but we don't want to remove them from the game

			if (destination.type === 'npc') {
				actions.push(
					changeEntity({ ...destination }, [x, y]),
					changeEntity(newPlayer, newPosition),
					changePlayerPosition(newPosition)
				);
			}	else {
				actions.push(
					changeEntity({ type: 'floor' }, [x, y]),
					changeEntity(newPlayer, newPosition),
					changePlayerPosition(newPosition)
				);
			}
		}
		switch (destination.type) {
			case 'boss':
			case 'enemy': {
				const playerLevel = Math.floor(player.xp / 100);
				// player attacks enemy
				const enemyDamageTaken = Math.floor(player.weapon.damage * _.random(1, 1.3) * playerLevel);
				destination.health -= enemyDamageTaken;

				if (destination.health > 0) {
					// enemy attacks player
					const playerDamageTaken = Math.floor(_.random(4, 7) * destination.level) - player.shield.protection;

					actions.push(
						changeEntity(destination, newPosition),
						modifyHealth(player.health - playerDamageTaken),
						newMessage(`FIGHT! You hurt the enemy with attack of [${enemyDamageTaken}].	The enemy hits back with an attack of [${playerDamageTaken}].  Enemy has [${destination.health}] health remaining.`)
					);

					if (player.health - playerDamageTaken <= 0) {
						// player dies
						dispatch(modifyHealth(0));
						setTimeout(() => dispatch(setEndGame('death')), 250);
						setTimeout(() => dispatch(newMessage(`YOU DIED`)),
						1000);
						setTimeout(() => dispatch(newMessage(`Everything goes dark..`)),
						2000);
						setTimeout(() => dispatch(newMessage(`You resolve to try harder next time`)),
						4000);
						setTimeout(() => dispatch(newMessage(`The grid resets itself....`)),
						6000);
						setTimeout(() => dispatch(batchActions([
							restart(), createLevel(1), resetDungeon()
						])),
						8000);
						return;
					}
				}

				if (destination.health <= 0) {
					// the fight is over and the player has won
					// add XP and move the player
					if (destination.type === 'boss') {
						actions.push(
							addXP(10 * destination.level),
							addCurrency(player, destination),
							changeEntity({ type: 'floor'}, [x, y]),
							changeEntity(newPlayer, newPosition),
							changePlayerPosition(newPosition),
							newMessage(`VICTORY! Your attack of [${enemyDamageTaken}] is too powerful for the enemy, who dissolves before your very eyes.`)
						);
						setTimeout(() => dispatch(setEndGame('victory')), 250);
						setTimeout(() => dispatch(newMessage(`YOU DEFATED THE BOSS!`)),
						1000);
						setTimeout(() => dispatch(newMessage(`The BOSS emits an almighty scream`)),
						2000);
						setTimeout(() => dispatch(newMessage(`You bask momentarily in your glory`)),
						4000);
						setTimeout(() => dispatch(newMessage(`The grid resets itself....`)),
						6000);
						setTimeout(() => dispatch(batchActions([
							restart(), createLevel(1), resetDungeon()
						])),
						8000);
					} else {
						actions.push(
							addXP(10 * destination.level),
							addCurrency(player, destination),
							changeEntity({ type: 'floor'}, [x, y]),
							changeEntity(newPlayer, newPosition),
							changePlayerPosition(newPosition),
							newMessage(`VICTORY! Your attack of [${enemyDamageTaken}] is too powerful for the enemy, who dissolves before your very eyes.`)
						);
						setTimeout(() => dispatch(newMessage(`You gain 10XP and feel yourself growing stronger..`)),
						2500);
						if ((player.xp + 10) % 100 === 0) {
							setTimeout(() => dispatch(newMessage(`LEVEL UP!`)), 5000);
						}
					}
				}
				break;
			}
			case 'exit':

				if (grid.dungeon.exitsComplete === grid.dungeon.exits) {
					setTimeout(() => dispatch(batchActions([
						setDungeonLevel(grid.dungeonLevel + 1, grid.dungeonLevel + 1),
						createLevel(grid.dungeonLevel + 1)
					])), 3000);
					actions.push(
						newMessage(`The cells start to shift... you transit to zone ${grid.dungeonLevel + 1}`)
					);
					//do I need this? the transit part causes a bug in the HUD
					setTimeout(() => dispatch(setDungeonLevel(grid.dungeonLevel + 1, `transit-${grid.dungeonLevel + 1}`)), 250);
				} else {
					const oldDungeon = grid.dungeon;
					const newDungeonState = {...oldDungeon, exitsComplete: oldDungeon.exitsComplete + 1}

					actions.push(
						newMessage(`You enter the tunnel and pass into the next zone`)
					);

					setTimeout(() => dispatch(batchActions([
						updateDungeon(newDungeonState),
						createLevel(grid.dungeonLevel)
					])), 250);
				}

				break;
			case 'potion':

				 if (destination.modifies === "health") {
					 actions.push(
	 					modifyHealth(player.health + destination.by),
	 					newMessage(`You drink a potion for [${destination.modifies}] health`)
	 				);
				 }

				break;
			case 'weapon':
				actions.push(
					addWeapon(destination),
					newMessage(`You pick up a ${destination.name}`)
				);
				break;
			case 'shield':
				actions.push(
					addShield(destination),
					newMessage(`You pick up a ${destination.name}`)
				);
			default:
				break;
		}
		dispatch(batchActions(actions));
	};
};

export function openingMessages() {
	return (dispatch) => {
		dispatch(newMessage(`Welcome to The Grid...`));
		setTimeout(() => {
			dispatch(newMessage(`You find yourself in a world filled with strange cells`));
		}, 3000);
		setTimeout(() => {
			dispatch(newMessage(`'Hmm... there must be a way out of here..'`));
		}, 6000);
	};
}

export function restartGame() {
	return (dispatch) => {
		dispatch(newMessage(`The grid resets itself....`));
		setTimeout(() => dispatch(batchActions([
			restart(), createLevel(1), resetDungeon()
		])),
		1000);
	};
}

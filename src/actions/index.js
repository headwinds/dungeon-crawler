import _ from 'lodash';
import { batchActions } from 'redux-batched-actions';
import createMap from '../bin/game-map-creator';
import populateEntities from '../bin/entity-creator';
import * as t from '../constants/action-types';

function addWeapon(payload) {
	return {
		type: t.ADD_WEAPON,
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
		payload: populateEntities(createMap(), level)
	};
}

function modifyHealth(payload) {
	return {
		type: t.MODIFY_HEALTH,
		payload
	};
}

function newMessage(payload) {
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

export function setDungeonLevel(payload) {
	return {
		type: t.SET_DUNGEON_LEVEL,
		payload
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

		let { grid, player } = getState();

		// cache some useful variables
		const [ x, y ] = grid.playerPosition.slice(0); // get current location
		const [ vectorX, vectorY ] = vector; // get direction modifier
		const newPosition = [vectorX + x, vectorY + y]; // define where we're moving to
		const newPlayer = grid.entities[y][x];
		const destination = grid.entities[y + vectorY][x + vectorX]; // whats in the cell we're heading to
		// store the actions in array to be past to batchActions
		const actions = [];

		// move the player unless destination is an enemy or a '0' cell
		if (destination.type && destination.type !== 'enemy' && destination.type !== 'boss') {
			actions.push(
				changeEntity({ type: 'floor' }, [x, y]),
				changeEntity(newPlayer, newPosition),
				changePlayerPosition(newPosition)
			);
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
					const playerDamageTaken = Math.floor(_.random(5, 7) * destination.level);

					actions.push(
						changeEntity(destination, newPosition),
						modifyHealth(player.health - playerDamageTaken),
						newMessage(`FIGHT! You hurt the enemy with attack of ${enemyDamageTaken}.	The enemy hits back with an attack of ${playerDamageTaken}`)
					);

					if (player.health - playerDamageTaken <= 0) {
						// player dies
						dispatch(modifyHealth(0));
						setTimeout(() => dispatch(setDungeonLevel('death')), 250);
						setTimeout(() => dispatch(newMessage(`YOU DIED`)),
						1000);
						setTimeout(() => dispatch(newMessage(`Everything goes red..`)),
						2000);
						setTimeout(() => dispatch(newMessage(`You resolve to try harder next time`)),
						4000);
						setTimeout(() => dispatch(newMessage(`The grid resets itself....`)),
						6000);
						setTimeout(() => dispatch(batchActions([
							restart(), createLevel(1), setDungeonLevel(1)
						])),
						8000);
						return;
					}
				}

				if (destination.health <= 0) {
					// the fight is over and the player has won
					// add XP and move the player
					if (destination.type === 'boss') {
						setTimeout(() => dispatch(setDungeonLevel('victory')), 250);
						setTimeout(() => dispatch(newMessage(`YOU WIN!`)),
						1000);
						setTimeout(() => dispatch(newMessage(`The boss emits an almighty scream`)),
						2000);
						setTimeout(() => dispatch(newMessage(`You bask momentarily in your glory`)),
						4000);
						setTimeout(() => dispatch(newMessage(`The grid resets itself....`)),
						6000);
						setTimeout(() => dispatch(batchActions([
							restart(), createLevel(1), setDungeonLevel(1)
						])),
						8000);
					} else {
						actions.push(
							addXP(20 * destination.level),
							changeEntity({ type: 'floor'}, [x, y]),
							changeEntity(newPlayer, newPosition),
							changePlayerPosition(newPosition),
							newMessage(`VICTORY! Your attack of ${enemyDamageTaken} is too powerful for the enemy, who dissolves before your very eyes.`)
						);
						setTimeout(() => dispatch(newMessage(`You gain 20XP and feel yourself growing stronger..`)),
						2500);
						if ((player.xp + 20) % 100 === 0) {
							setTimeout(() => dispatch(newMessage(`LEVEL UP!`)), 5000);
						}
					}
				}
				break;
			}
			case 'exit':
				setTimeout(() => dispatch(batchActions([
					setDungeonLevel(grid.dungeonLevel + 1),
					createLevel(grid.dungeonLevel + 1)
				])), 3000);
				actions.push(
					newMessage(`The cells start to shift... you transit to zone ${grid.dungeonLevel + 1}`)
				);
				setTimeout(() => dispatch(setDungeonLevel(`transit-${grid.dungeonLevel + 1}`)),250)
				break;
			case 'potion':
				actions.push(
					modifyHealth(player.health + 20),
					newMessage(`You drink a potion for 20 health`)
				);
				break;
			case 'weapon':
				actions.push(
					addWeapon(destination),
					newMessage(`You pick up the ${destination.name}`)
				);
				break;
			default:
				break;
		}
		dispatch(batchActions(actions));
	};
};

export function restartGame() {
	return (dispatch) => {
		dispatch(newMessage(`The grid resets itself....`));
		setTimeout(() => dispatch(batchActions([
			restart(), createLevel(1), setDungeonLevel(1)
		])),
		1000);
	}
}

import update from 'react-addons-update';
import * as t from '../constants/action-types';
import dungeons from '../config/dungeons';

const initialState = {
	entities: [[]],
	dungeonLevel: 0,
	dungeon: {...dungeons[0]},
	playerPosition: [],
	endGame: "unknown",
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case t.CHANGE_ENTITY: {
			const [x, y] = payload.coords;
			const entities =	update(state.entities, {
				[y]: {
					[x]: {$set: payload.entity }
				}
			});
			return { ...state, entities };
		}
		case t.CHANGE_PLAYER_POSITION:
			return { ...state, playerPosition: payload };
		case t.SET_END_GAME:
				return { ...state, endGame: payload };
		case t.CREATE_LEVEL:
			return {
				...state,
				playerPosition: payload.playerPosition,
				entities: payload.entities
			};
		case t.UPDATE_DUNGEON:
				return { ...state, dungeon: payload };
		case t.SET_DUNGEON_LEVEL:
			return { ...state, dungeonLevel: payload, dungeon: dungeons[payload - 1] };
		case t.RESET_DUNGEON:
				return { ...state, dungeonLevel: 0, dungeon: dungeons[0] };
		default:
			return state;
	}
};

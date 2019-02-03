import * as t from '../constants/action-types';
import config from '../config.js';

const messages = [];

const initialState = {
	fogMode: config.FOG_MODE,
	messages,
	showNPCStore: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case t.NEW_MESSAGE:
			return { ...state, messages: [ ...state.messages, payload ]};
		case t.TOGGLE_FOG_MODE:
			return { ...state, fogMode: !state.fogMode };
		case t.TOGGLE_NPC_STORE:
				return { ...state, fogMode: !state.showNPCStore };	
		case t.RESTART:
			return initialState;
		default:
			return state;
	}
};

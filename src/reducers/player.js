import * as t from '../constants/action-types';

const initialState = {
	health: 100,
	xp: 100,
	gold: 0,
	currency: {
		gold: 0,
		silver: 0,
		copper: 500
	},
	weapon: {
		name: 'Fist',
		damage: 100
	},
	shield: {
		name: 'Pants',
		protection: 1
	},
	examining: {
		iconClass: "floor",
		title: "",
		action: "Look",
		aroundMe: "press l to look around",
	},
	inventory: [], // as a mechanic I want to limit the investory to 6 items
	npcsAroundMe: [],
};

export default (state = initialState, { type, payload }) => {
	const currency = state.currency;
	switch (type) {
		case t.TALK_TO_NPC:
			return { ...state, npcsAroundMe: payload.npcsAroundMe};
		case t.PLAYER_BOUGHT_ITEM:
				return { ...state, currency: payload.currency, inventory: payload.inventory};
		case t.PLAYER_SOLD_ITEM:
			return { ...state, currency: payload.currency, inventory: payload.inventory};
		case t.ADD_GOLD:
			return { ...state, currency: {...currency, gold: payload }};
		case t.REMOVE_GOLD:
			return { ...state, currency: {...currency, gold: payload }};
		case t.ADD_SILVER:
			return { ...state, currency: {...currency, silver: payload }};
		case t.REMOVE_SILVER:
			return { ...state, currency: {...currency, silver: payload }};
		case t.ADD_COPPER:
			return { ...state, currency: {...currency, copper: payload }};
		case t.REMOVE_COPPER:
			return { ...state, currency: {...currency, copper: payload }};
		case t.ADD_WEAPON:
			return { ...state, weapon: payload };
		case t.ADD_SHIELD:
			return { ...state, shield: payload };
		case t.ADD_XP:
			return { ...state, xp: state.xp + payload };
		case t.MODIFY_HEALTH:
			return { ...state, health: payload };
		case t.RESTART:
			return initialState;
		case t.LOOK_AROUND:
		  const examining = state.examining;
			return { ...state, examining: {...examining, ...payload} };
		default:
			return state;
	}
};

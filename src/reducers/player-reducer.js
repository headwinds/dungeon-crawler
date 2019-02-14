import * as t from '../constants/action-types';
import config from "../config.js";
import worldsets from '../worldsets/worldsets';

const gameWorldSeq = worldsets[config.OWNER];

// Seq is a keyed object of Sets containing Records
const playerRecord = gameWorldSeq.get("playerSet").filter( playerRecord =>  playerRecord.get("name") === config.STARTING_HERO_NAME ).first();	

// set default player inventory based on worldset
const defaultWeapon = gameWorldSeq.get("weaponSet").filter( record =>  record.get("name") === config.STARTING_WEAPON_NAME ).first();	 
const defaultShield = gameWorldSeq.get("shieldSet").filter( record =>  record.get("name") === config.STARTING_SHIELD_NAME ).first();	  
const defaultInventory = [defaultWeapon, defaultShield];  
const newPlayerRecord = playerRecord.set("inventory", defaultInventory);

const initialState = newPlayerRecord;

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

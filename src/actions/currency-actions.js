import _ from 'lodash';
import { batchActions } from 'redux-batched-actions';
import * as t from '../constants/action-types';

function addGold(payload) {
	return {
		type: t.ADD_GOLD,
		payload
	};
}

function addSilver(payload) {
	return {
		type: t.ADD_SILVER,
		payload
	};
}

function addCopper(payload) {
	return {
		type: t.ADD_COPPER,
		payload
	};
}

function removeGold(payload) {
	return {
		type: t.REMOVE_GOLD,
		payload
	};
}

function removeSilver(payload) {
	return {
		type: t.REMOVE_SILVER,
		payload
	};
}

function removeCopper(payload) {
	return {
		type: t.REMOVE_COPPER,
		payload
	};
}

export function addCurrency(player, entity){
	switch(entity.level) {
		case 1 :
			return addCopper(10 + player.currency.copper);
		case 2 :
			addCopper(10 + player.currency.copper);
			return addSilver(1 + player.currency.silver);
		case 2 :
			addCopper(100 + player.currency.copper);
			return addSilver(5 + player.currency.silver);
		case 3 :
			addCopper(25 + player.currency.copper);
			return addSilver(10 + player.currency.silver);
		case 4 :
			addCopper(5 + player.currency.copper);
			addSilver(100 + player.currency.silver);
			return addGold(1 + player.currency.gold);
		default :
			return addCopper(10 + player.currency.copper);
	}

}

export function removeCurrency(player, entity){

}

import _ from 'lodash';
import { batchActions } from 'redux-batched-actions';
import * as t from '../constants/action-types';
import { getCreditsAsCopper, displayCost, getPlayerCurrencyAfterBuy } from '../utils/currency-utils';
import { npcSoldItem, npcBoughtItem } from './npc';
import {newMessage} from './index';
import config from '../config.js';

export function toggleNPCStore() {
  return {
    type: t.TOGGLE_NPC_STORE,
  };
}

export function selectNPC(npc) {

  /*
  Before you can interact with an NPC, you need to select which one from those around you
  */
  return {
    type: t.SELECT_NPC,
  };
}

export function talkToNPC(npcsAroundMe) {

  /*
  Conversation
  when you start, a conversation the NPC Store overlay appears which:
  1. shows the npc and conversation options
  2. if the npc has item to exchange, it will show the store but not everyone npc has items
  */

  return {
    type: t.TALK_TO_NPC,
    payload: {npcsAroundMe}
  };
}

export function interactWithNeutral(neutralsAroundMe) {

  /*
  Conversation
  when you start, a conversation the NPC Store overlay appears which:
  1. shows the npc and conversation options
  2. if the npc has item to exchange, it will show the store but not everyone npc has items
  */

  return {
    type: t.INTERACT_WITH_NEUTRAL,
    payload: {neutralsAroundMe}
  };
}



export function itemTradeSuccess() {
  return {
    type: t.PLAYER_TRADE_SUCCESS,
  };
}

export function itemTradeFail() {
  return {
    type: t.PLAYER_TRADE_FAIL,
  };
}

export function playerBoughtItem(inventory, currency) {
  return {
    type: t.PLAYER_BOUGHT_ITEM,
    payload: {
      inventory,
      currency,
    }
  };
}

export function playerSoldItem(inventory, currency) {
  return {
    type: t.PLAYER_SOLD_ITEM,
    payload: {
      inventory,
      currency,
    }
  };
}

// we could add a second tradeItems function if it was a straight swap not involving currency
// if it's one item assume it's for cash
export function tradeItem(item, buyer, seller) {

  return (dispatch, getState) => {

    const actions = [];

    // do I have room for it my inventory?

     console.log("max ", config.MAX_INVENTORY_ITEMS )
     console.log("max vs", buyer.inventory.length  )

    if (buyer.inventory.length >= config.MAX_INVENTORY_ITEMS) {

      actions.push(
        itemTradeFail(),
        newMessage("You have no room for it!")
      );

      return dispatch(batchActions(actions));
    }

    // can I afford the item?
    const myTotalCopper = getCreditsAsCopper(buyer);
    const itemTotalCopper = getCreditsAsCopper(item);

    if (myTotalCopper > itemTotalCopper) {

      const newTotalCopper =  myTotalCopper - itemTotalCopper;
      const newPlayerCurrency = getPlayerCurrencyAfterBuy(newTotalCopper);
      const newPlayerInventory = [...buyer.inventory, item];

      //this.props.buyItem(boughtItem, newPlayerCurrency)
      actions.push(
        npcSoldItem(seller, item), // later we could add currency to the npc - give thieves something to steal
        playerBoughtItem(newPlayerInventory, newPlayerCurrency),
      )

      const { player } = getState();

      // 6 slots
      const newInventory = (player.inventory.length < 6) ? [...player.inventory, item] : [...player.inventory];



      actions.push(
        itemTradeSuccess(),
        newMessage(`You bought a [${item.name}].`)
      );

    } else {
      // can't afford it...
      //this.setState({conversation: "You can't afford it."})
      // this.
      const short = itemTotalCopper - myTotalCopper;
      const message = `Rats! You can't afford it - you're short ${short} copper.`	// ok for now but may want to show the  gold, silver, copper brreak ddown later

      //this.props.newMessage(message)
      actions.push(
        itemTradeFail(),
        newMessage(message) );

    }


    return dispatch(batchActions(actions));

  }
}

import * as t from '../constants/action-types';

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

export function buyItem(item) {

  return {
    type: t.BUY_ITEM,
  };
}

export function sellItem(item) {
  return {
    type: t.SELL_ITEM,
  };
}

// when you an item and an NPC has item but you or the NPC may not have currency
export function tradeItem(playerItem, npcItem) {
  return {
    type: t.TRADE_ITEM,
  };
}

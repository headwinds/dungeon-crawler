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
}

export function talkToNPC(npc) {

  /*
  Conversation
  when you start, a conversation the NPC Store overlay appears which:
  1. shows the npc and conversation options
  2. if the npc has item to exchange, it will show the store but not everyone npc has items
  */
}

export function buyItem(item) {

}

export function sellItem(item) {

}

// when you an item and an NPC has item but you or the NPC may not have currency
export function tradeItem(playerItem, npcItem) {

}

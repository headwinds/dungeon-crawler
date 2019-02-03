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


export function npcBoughtItem(item, npc) {
  return {
    type: t.NPC_BOUGHT_ITEM,
    payload: {
      item,
      npc,
    }
  };
}

export function npcSoldItem(item, npc) {
  return {
    type: t.NPC_SOLD_ITEM,
    payload: {
      item,
      npc,  
    }
  };
}

export function npcTradedItem(item, npc) {
  return {
    type: t.NPC_TRADED_ITEM,
    payload: {
      item,
      npc,  
    }
  };
}

import {Record} from "immutable";

const WorldModel = Record({
  playerSet: [],
  itemSet: [],
  enemySet: [],
  neutralSet: [],
  npcSet: [],
  shieldSet: [],
  weaponSet: [],
  type: 'worldset',
});

export default WorldModel;

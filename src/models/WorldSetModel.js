import {Record} from "immutable";

const WorldSetModel = Record({
  items: [],
  enemies: [],
  neutrals: [],
  npcs: [],
  shields: [],
  weapons: [],
  type: 'worldset',
});

export default WorldSetModel;

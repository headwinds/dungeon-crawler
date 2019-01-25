import {Record} from "immutable";

const WeaponModel = Record({
  name: 'generic item',
  modifies: "none",
  by: 0,
  type: 'weapon',
  damage: 10,
});

export default WeaponModel;
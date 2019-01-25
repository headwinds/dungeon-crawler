import {Record} from "immutable";

const ShieldModel = Record({
  name: 'generic item',
  modifies: "none",
  by: 0,
  type: 'shield',
  protection: 10,
});

export default ShieldModel;
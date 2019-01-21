import {Record} from "immutable";

const ItemModel = Record({
  name: 'generic item',
  modifies: "health",
  by: 10,
  type: 'item',
});

export default ItemModel;
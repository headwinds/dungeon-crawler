import {Record} from "immutable";

const NeutralModel = Record({
    type: "neutral",
    name: "",
    health: 100,
    weapon: "",
    armour: "",
    speed: 10,
    accuracy: 10,
    treaure: []
  });

export default NeutralModel;
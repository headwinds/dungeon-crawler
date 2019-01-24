import {Record} from "immutable";

const EnemyModel = Record({
    type: "enemy",
    name: "",
    health: 100,
    weapon: "",
    armour: "",
    speed: 10,
    accuracy: 10,
});

export default EnemyModel;
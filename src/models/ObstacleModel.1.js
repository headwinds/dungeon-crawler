import {Record} from "immutable";

const ObstacleModel = Record({
    type: "obstacle",
    name: "snow",
    health: 100,
    weapon: "",
    armour: "",
    speed: 0,
    accuracy: 10,
    requires:["shovel"]
});

export default ObstacleModel;
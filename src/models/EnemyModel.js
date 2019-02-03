import {Record} from "immutable";

/*
https://twitter.com/kurtruslfanclub/status/1088023995612520449
👻 Desired Player Behaviour
🦇 Appearance Rule
👾 Surprise Structure
🐺 Defeat Requirements
👽 Alert Rules
👹 When to fight / to take flight
*/

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
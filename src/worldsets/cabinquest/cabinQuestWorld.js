import { Set, Seq } from "immutable";

import PlayerModel from "../../models/PlayerModel";
import ItemModel from "../../models/ItemModel";
import EnemyModel from "../../models/EnemyModel";
import WeaponModel from "../../models/WeaponModel";
import WorldModel from "../../models/WorldModel";

import commonWorld from "../common/commonWorld";

// PLAYERS

const defaultPlayer = new PlayerModel({
    name: "Winnie"
  });
  
const playerSet = new Set([defaultPlayer]);

const cabinQuestWorld = new WorldModel({
  playerSet,
  itemSet: commonWorld.get("itemSet"),
  enemySet: commonWorld.get("enemySet"),
  neutralSet: commonWorld.get("neutralSet"),
  npcSet: commonWorld.get("npcSet"),
  shieldSet: commonWorld.get("shieldSet"),
  weaponSet: commonWorld.get("weaponSet")
});

export default cabinQuestWorld;

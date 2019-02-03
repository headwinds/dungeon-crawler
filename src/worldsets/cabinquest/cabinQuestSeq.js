import { Set, Seq } from "immutable";

import PlayerModel from "../../models/PlayerModel";
import ItemModel from "../../models/ItemModel";
import EnemyModel from "../../models/EnemyModel";
import WeaponModel from "../../models/WeaponModel";
import WorldModel from "../../models/WorldModel";

import commonSeq from "../common/commonSeq";

// PLAYERS

const defaultPlayer = new PlayerModel({
    name: "Winnie"
  });
  
const playerSet = new Set([defaultPlayer]);
const commonObj = commonSeq.toJS();
commonObj["playerSet"] = playerSet;

const cabinQuestSeq = new Seq(commonObj);

export default cabinQuestSeq;

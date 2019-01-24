import {Set, Seq} from "immutable";

import ItemModel from "../../models/ItemModel";
import EnemyModel from "../../models/EnemyModel";
import WorldModel from "../../models/WorldModel";

// ITEMS


const potionItem = new ItemModel({
  name: 'Health Potion',
  modifies: "health",
  by: 10,
  type: 'potion',
})  

const mushroomItem = new ItemModel({
  name: 'mushroom',
  modifies: "nutrition",
  by: 10,
  type: 'plant',
})

const itemSet = new Set([mushroomItem, potionItem]);

// ENEMIES

const ratEnemy = new EnemyModel({
  name: "Rat",
  health: 10,
  weapon: "teeth",
  armour: "fur",
  speed: 10,
  accuracy: 10,
  level: 1
})

const koboldEnemy = new EnemyModel({
  name: "Kolbold",
  health: 10,
  weapon: "teeth",
  armour: "fur",
  speed: 10,
  accuracy: 10,
  level: 1
})

const darkElfEnemy = new EnemyModel({
  name: "Dark Elf",
  health: 10,
  weapon: "teeth",
  armour: "fur",
  speed: 10,
  accuracy: 10,
  level: 1
})

const bossEnemy = new EnemyModel({
  name: "Boss",
  health: 10,
  weapon: "teeth",
  armour: "fur",
  speed: 10,
  accuracy: 10,
  level: 1
})

const enemySet = new Set([ratEnemy, koboldEnemy, darkElfEnemy, bossEnemy]);

// NEUTRALS

const neutralSet = new Set([mushroomItem]);

// NPCS

const npcSet = new Set([mushroomItem]);

// SHIELDS

const shieldSet = new Set([mushroomItem]);

// WEAPONS

const weaponSet = new Set([mushroomItem]);

const world = new WorldModel(
    {itemSet,
    enemySet,
    neutralSet,
    npcSet,
    shieldSet,
    weaponSet})

const commonSeq = new Seq(world.toJS());

export default commonSeq;
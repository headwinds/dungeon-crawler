import { Set, Seq } from "immutable";

import PlayerModel from "../../models/PlayerModel";
import ItemModel from "../../models/ItemModel";
import EnemyModel from "../../models/EnemyModel";
import WeaponModel from "../../models/WeaponModel";
import ShieldModel from "../../models/ShieldModel";
import WorldModel from "../../models/WorldModel";

// PLAYERS

const defaultPlayer = new PlayerModel({
  name: "Avatar"
});

const playerSet = new Set([defaultPlayer]);

// ITEMS

const potionItem = new ItemModel({
  name: "Health Potion",
  modifies: "health",
  by: 10,
  type: "potion"
});

const mushroomItem = new ItemModel({
  name: "mushroom",
  modifies: "health",
  by: 10,
  type: "food"
});

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
});

const koboldEnemy = new EnemyModel({
  name: "Kolbold",
  health: 10,
  weapon: "teeth",
  armour: "fur",
  speed: 10,
  accuracy: 10,
  level: 1
});

const darkElfEnemy = new EnemyModel({
  name: "Dark Elf",
  health: 10,
  weapon: "teeth",
  armour: "fur",
  speed: 10,
  accuracy: 10,
  level: 1
});

const bossEnemy = new EnemyModel({
  name: "Boss",
  health: 10,
  weapon: "teeth",
  armour: "fur",
  speed: 10,
  accuracy: 10,
  level: 1
});

const enemySet = new Set([ratEnemy, koboldEnemy, darkElfEnemy, bossEnemy]);

// NEUTRALS

const neutralSet = new Set([mushroomItem]);

// NPCS

const npcSet = new Set([mushroomItem]);

// SHIELDS

const shieldTypes = [
  {
    name: "Hat",
    protection: 1,
    type: "shield"
  },
  {
    name: "Dress",
    protection: 1,
    type: "shield"
  },
  {
    name: "Pants",
    protection: 1,
    type: "shield"
  },
  {
    name: "Bracers",
    protection: 5,
    type: "shield"
  },
  {
    name: "Rusty Shield",
    protection: 10,
    type: "shield"
  },
  {
    name: "Wooden Shield",
    protection: 12,
    type: "shield"
  },
  {
    name: "Leather Shield",
    protection: 20,
    type: "shield"
  },
  {
    name: "Chain Shield",
    protection: 25,
    type: "shield"
  },
  {
    name: "Plate Shield",
    protection: 40,
    type: "shield"
  },
  {
    name: "Elven Shield",
    protection: 50,
    type: "shield"
  }
];

const shieldRecords = shieldTypes.map(typeObj => {
  return new ShieldModel(typeObj); 
  });
const shieldSet = new Set(shieldRecords);

// WEAPONS

const weaponTypes = [
  {
    name: "Fist",
    damage: 1
  },
  {
    name: "Stick",
    damage: 10
  },
  {
    name: "Club",
    damage: 15
  },
  {
    name: "Rusty Sword",
    damage: 20
  },
  {
    name: "Butcher Knife",
    damage: 25
  },
  {
    name: "Mace",
    damage: 30
  },
  {
    name: "Flail",
    damage: 35
  },
  {
    name: "Long Sword",
    damage: 40
  },
  {
    name: "Broad Sword",
    damage: 50
  }
];

const weaponRecords = weaponTypes.map(typeObj => ( new WeaponModel(typeObj) ));
const weaponSet = new Set(weaponRecords);

const commonWorld = new WorldModel({
  playerSet,
  itemSet,
  enemySet,
  neutralSet,
  npcSet,
  shieldSet,
  weaponSet
});

export default commonWorld;

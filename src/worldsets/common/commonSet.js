import ItemModel from "../../models/ItemModel";
import WorldSetModel from "../../models/WorldSetModel";

// ITEMS

const potionConfig = {
    name: 'Health Potion',
    modifies: "health",
    by: 10,
    type: 'potion',
  }

const potionItem = new ItemModel(potionConfig)  

const mushroomConfig = {
    name: 'mushroom',
    modifies: "nutrition",
    by: 10,
    type: 'plant',
  }

const mushroomItem = new ItemModel(mushroomConfig)

const items = [mushroomItem, potionItem];

// ENEMIES

const enemies = [mushroomItem];

// NEUTRALS

const neutrals = [mushroomItem];

// NPCS

const npcs = [mushroomItem];

// SHIELDS

const shields = [mushroomItem];

// WEAPONS

const weapons = [mushroomItem];

const worldsetConfig = {
    items,
    enemies,
    neutrals,
    npcs,
    shields,
    weapons
  }

const commonSet = new WorldSetModel(worldsetConfig);

export default commonSet;
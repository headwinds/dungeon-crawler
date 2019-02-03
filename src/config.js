
/*
headwinds

need to fix issue where dialog with NPC is hidden behind scoreboard

*/

const headwinds = {
  OWNER: "headwinds",
  VP_WIDTH_RATIO_CONTAINED: 30,
  VP_HEIGHT_RATIO_CONTAINED: 21,
  VP_HEIGHT_RATIO_FULL: 1,
  VP_WIDTH_RATIO_FULL: 1,
  FULL_GRID_RATIO_WIDTH: 24,
  FULL_GRID_RATIO_HEIGHT: 19,
  TIPS_ALONG_BOTTOM: false,
  GAME_SHOW_TITLE: false,
  VP_TYPE: "full",
  FOG_MODE: false,
  CURRENCY_GOLD_LABEL: "Gold",
  CURRENCY_SILVER_LABEL: "Silver",
  CURRENCY_COPPER_LABEL: "Copper",
  GAME_TITLE: "Cabin Quest",
  GAME_SUBTITLE: " explore time between city and country",
  GAME_URL: "https://cabinquest.now.sh",
  MAX_INVENTORY_ITEMS: 6,
  BACKEND: "python",
  WORLDSET: "cabinquest", 
  STARTING_HERO_NAME: "Winnie",
  API_BASE_URL: "api/shadowhunters",
}

const peted = {
  OWNER: "peted",
  VP_WIDTH_RATIO_CONTAINED: 30,
  VP_HEIGHT_RATIO_CONTAINED: 21,
  VP_HEIGHT_RATIO_FULL: 1,
  VP_WIDTH_RATIO_FULL: 1,
  FULL_GRID_RATIO_WIDTH: 24,
  FULL_GRID_RATIO_HEIGHT: 19,
  TIPS_ALONG_BOTTOM: true,
  GAME_SHOW_TITLE: true,
  VP_TYPE: "contained",
  FOG_MODE: true,
  CURRENCY_GOLD_LABEL: "Gold",
  CURRENCY_SILVER_LABEL: "Silver",
  CURRENCY_COPPER_LABEL: "Copper",
  GAME_TITLE: "THE GRID",
  GAME_SUBTITLE: "- Roguelike",
  GAME_URL: "https://thepeted.github.io/dungeon-crawler",
  MAX_INVENTORY_ITEMS: 6,
  BACKEND: "none",
  WORLDSET: "doom", 
  STARTING_HERO_NAME: "Doomguy"
}

const config = headwinds;

export default config;

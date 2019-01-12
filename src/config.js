
/*
headwinds

need to fix issue where dialog with NPC is hidden behind scoreboard

*/

const headwinds = {
  TIPS_ALONG_BOTTOM: false,
  GAME_SHOW_TITLE: false,
  VP_TYPE: "full",
  FOG_MODE: false,
  GAME_TITLE: "Cabin Quest",
  GAME_SUBTITLE: " explore time between city and country",
  GAME_URL: "https://cabinquest.now.sh",
  MAX_INVENTORY_ITEMS: 6,
  BACKEND: "python",
}

const peted = {
  TIPS_ALONG_BOTTOM: true,
  GAME_SHOW_TITLE: true,
  VP_TYPE: "contained",
  FOG_MODE: true,
  GAME_TITLE: "THE GRID",
  GAME_SUBTITLE: "- Roguelike",
  GAME_URL: "https://thepeted.github.io/dungeon-crawler",
  MAX_INVENTORY_ITEMS: 6,
  BACKEND: "none",
}

const currentConfig = headwinds;

const config = {
  VP_WIDTH_RATIO_CONTAINED : 30,
  VP_HEIGHT_RATIO_CONTAINED : 21,
  VP_HEIGHT_RATIO_FULL: 1,
  VP_WIDTH_RATIO_FULL: 1,
  FULL_GRID_RATIO_WIDTH: 24,
  FULL_GRID_RATIO_HEIGHT: 19,
  VP_TYPE: currentConfig.VP_TYPE, // full or contained,
  GAME_TITLE: currentConfig.GAME_TITLE,
  GAME_SUBTITLE: currentConfig.GAME_SUBTITLE,
  GAME_SHOW_TITLE: currentConfig.GAME_SHOW_TITLE,
  TIPS_ALONG_BOTTOM: currentConfig.TIPS_ALONG_BOTTOM,
  FOG_MODE: currentConfig.FOG_MODE,
  CURRENCY_GOLD_LABEL: "Gold",
  CURRENCY_SILVER_LABEL: "Silver",
  CURRENCY_COPPER_LABEL: "Copper",
  GAME_URL: currentConfig.GAME_URL,
  MAX_INVENTORY_ITEMS: currentConfig.MAX_INVENTORY_ITEMS,
  BACKEND: currentConfig.BACKEND,
}

export default config;

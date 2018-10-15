import config from '../config.js';

const width = (config.VP_TYPE === "full") ? Math.floor(window.innerWidth / config.FULL_GRID_RATIO_WIDTH) : 80; //(config.VP_TYPE === "full") ? 100 : 80;
const height = (config.VP_TYPE === "full") ? Math.floor(window.innerHeight / config.FULL_GRID_RATIO_HEIGHT) : 60;

export const GRID_WIDTH = width;
export const GRID_HEIGHT = height;
export const MAX_ROOMS = (config.VP_TYPE === "full") ? 25 : 15;
export const ROOM_SIZE_RANGE = [7, 12];
export const CELL_SIZE = 10; // not used yet...

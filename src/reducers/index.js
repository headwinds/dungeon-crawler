import { combineReducers } from 'redux';
import grid from './grid-reducer';
import player from './player-reducer';
import ui from './ui-reducer';

const rootReducer = combineReducers({ grid, player, ui });

export default rootReducer;

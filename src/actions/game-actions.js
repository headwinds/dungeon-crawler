import _ from "lodash";
import * as t from "../constants/action-types";
import {api} from "../utils/http";
import config from "../config.js";

export function loadGame(player) {
    return (dispatch, getState) => {

      dispatch({type: t.GAME_LOAD_REQUEST });

      return api.post("/load", {username: player.username})
              .then(
                response => {

                },
                err => {

                }
              ).catch(err => {

              }).finally();

    }
}

export function saveGame(player) {
  return (dispatch, getState) => {

    dispatch({type: t.GAME_SAVE_REQUEST });

    return api.post("/save", {username: player.username})
            .then(
              response => {

              },
              err => {
                
              }
            ).catch(err => {

            }).finally();

  }
}
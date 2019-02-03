import _ from "lodash";
import { batchActions } from "redux-batched-actions";
import * as t from "../constants/action-types";
import config from "../config.js";
import {api} from "../utils/http";
import axios from "axios";

export function twitterAuth() {
  return (dispatch, getState) => {
    const actions = [];

    const url =
      document.domain === "127.0.0.1"
        ? "http://127.0.0.1:5000/api/twitter/auth"
        : "https://" + document.domain + "/api/twitter/auth";

    let authenticated, greet, authenticateCheckComplete;
   
    axios
      .get(url)
      .then(response => {
        
        if (response.data.screen_name) {
          authenticated = true;
          greet = response.data.screen_name + ", shall we begin?";
        } else {
          greet = "";
          authenticated = false;
        }

        authenticateCheckComplete = true; 
        
        actions.push({ type: t.USER_TWITER_AUTH_SUCCESS,
                        payload: {
                            authenticated,
                            greet,
                            authenticateCheckComplete
                        }
                      });
      })
      .catch(error => {
        authenticateCheckComplete = true; 
        authenticated = false;
        greet="";
        actions.push({ type: t.USER_TWITER_AUTH_FAIL,
            payload: {
                authenticated,
                greet,
                authenticateCheckComplete
            }
        });
      })
      .finally(() => {
        dispatch(batchActions(actions));
      });
  }
}
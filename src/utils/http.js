import axios from "axios";
import config from "../config";

export const api = axios.create({
  baseURL: config.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Pragma": "no-cache"
  }
});

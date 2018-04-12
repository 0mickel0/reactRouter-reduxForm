import axios from "axios";
import { FETCH_WALL_ITEMS, CREATE_WALL_ITEM } from '../constatnts/ActionType'

const ROOT_URL = "https://api.vk.com/method/";
const API_V = "&v=5.74";
const APP_ID="5853770";
const GROUP_ID = "-126373581";
const API_KEY = "&access_token=e7c0c2b711971f158db29d3ab7c8638d74ff420fb757208db5e7068261594fee95979f9d2a9a1e9b33d1f";

export function fetchWallItems() {
  return axios.get(`${ROOT_URL}/wall.get?owner_id=${GROUP_ID}${API_V}${API_KEY}`).then(response => ({
    type: FETCH_WALL_ITEMS,
    payload: response.data.response.items
  }));
}

export function createWallItem(values) {
  const request = axios
    .post(`${ROOT_URL}wall.post?owner_id=${GROUP_ID}&message=${values}${API_V}${API_KEY}`)

  return {
    type: CREATE_WALL_ITEM,
    payload: request
  };
}
import axios from "axios";

export const FETCH_WALL_ITEMS = "fetch_wall_items";
export const CREATE_WALL_ITEM = "create_wall_item";
const ROOT_URL = "https://api.vk.com/method/";
const API_V = "&v=5.74";
const GROUP_ID = "-126373581";
const API_KEY = "&access_token=c7afeeefe13d9dd5150fa3134b6b541c0bd2da80bc8227d0fe164c7c62852ecc32a255148c6ebc544ccd3";

export function fetchWallItems() {
  return axios.get(`${ROOT_URL}/wall.get?owner_id=${GROUP_ID}${API_V}${API_KEY}`).then(response => ({
    type: FETCH_WALL_ITEMS,
    payload: response.data.response.items
  }));
}

export function createWallItem(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/wall.post?owner_id=${GROUP_ID}&message=999${API_V}${API_KEY}`, values)

  return {
    type: CREATE_WALL_ITEM,
    payload: request
  };
}
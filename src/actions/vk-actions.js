import axios from "axios";
import { FETCH_WALL_ITEMS, CREATE_WALL_ITEM, FETCH_USERS } from '../constatnts/ActionType'

const ROOT_URL = "https://api.vk.com/method/";
const API_V = "&v=5.74";
const APP_ID="5853770";
const GROUP_ID = "-126373581";
const COUNT = "&count=20";
const FIELDS = "&fields=photo,screen_name,sex,bdate,city, country,photo_400_orig,online,status";
const API_KEY = "&access_token=e7c0c2b711971f158db29d3ab7c8638d74ff420fb757208db5e7068261594fee95979f9d2a9a1e9b33d1f";

export function fetchWallItems() {
  const url = `${ROOT_URL}/wall.get?owner_id=${GROUP_ID}${API_V}${API_KEY}`;
  return axios.get(url).then(response => ({
    type: FETCH_WALL_ITEMS,
    payload: response.data.response.items
  }));
}

export function createWallItem(values) {
  const url = `${ROOT_URL}wall.post?owner_id=${GROUP_ID}&message=${values}${API_V}${API_KEY}`;
  const request = axios.post(url);
  return {
    type: CREATE_WALL_ITEM,
    payload: request
  };
}

export function fetchUsers(user) {
  const url = `${ROOT_URL}users.search?q=${user}${FIELDS}${COUNT}${API_V}${API_KEY}`;
  return axios.get(url).then(response => ({
    type: FETCH_USERS,
    payload: response.data.response.items
  }));

}
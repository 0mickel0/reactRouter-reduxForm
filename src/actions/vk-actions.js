import axios from "axios";
import { FETCH_WALL_ITEMS,
  CREATE_WALL_ITEM,
  FETCH_USERS,
  FETCH_UPLOAD_COVER_URL,
  POST_TO_UPLOAD_URL} from '../constatnts/ActionType'

const ROOT_URL = "https://api.vk.com/method/";
const API_V = "&v=5.74";
const APP_ID="5853770";
const GROUP_ID = "126373581";
const COUNT = "&count=20";
const FIELDS = "&fields=photo,screen_name,sex,bdate,city,country,photo_200_orig,online,status";
const API_KEY = "&access_token=e7c0c2b711971f158db29d3ab7c8638d74ff420fb757208db5e7068261594fee95979f9d2a9a1e9b33d1f";
const UPL_URL = "https://pu.vk.com/c830208/upload.php?_query=eyJhY3QiOiJvd25lcl9jb3ZlciIsIm9pZCI6LTEyNjM3MzU4MSwiYXBpIjp0cnVlLCJhcGlfd3JhcCI6eyJoYXNoIjoiOGQ5M2FjNGFhNTVlMTg1NDY2IiwicGhvdG8iOiJ7cmVzdWx0fSJ9LCJtaWQiOjI2MjA2NDc4LCJzZXJ2ZXIiOjgzMDIwOCwiX29yaWdpbiI6Imh0dHBzOlwvXC9hcGkudmsuY29tIiwiX3NpZyI6IjIwN2QzMzYwMjQ5Y2M5ZDYyYWVhNTM0Y2VlMDY4NjgyIn0&_crop=0,0,795,200"

export function fetchWallItems() {
  const url = `${ROOT_URL}/wall.get?owner_id=-${GROUP_ID}${API_V}${API_KEY}`;
  return axios.get(url).then(response => ({
    type: FETCH_WALL_ITEMS,
    payload: response.data.response.items
  }));
}

export function createWallItem(values) {
  const url = `${ROOT_URL}wall.post?owner_id=-${GROUP_ID}&message=${values}${API_V}${API_KEY}`;
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

export function fetchUploadCoverUrl() {
  const url = `${ROOT_URL}/photos.getOwnerCoverPhotoUploadServer?group_id=${GROUP_ID}${API_V}${API_KEY}`;
  return axios.get(url).then(response => ({
    type: FETCH_UPLOAD_COVER_URL,
    payload: response.data.response
  })
  );
}

export function postToUploadUrl(image) {
  console.log(image);
  var fd = new FormData();
  fd.append('photo', image);
  const url = UPL_URL;
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  axios({
    method: 'post',
    url: url,
    data: fd,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  // return {
  //   type: POST_TO_UPLOAD_URL,
  //   payload: request
  // };
}
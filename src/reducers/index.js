import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ItemsReducer from "./reducer_items";
import PostsReducer from "./reducer_posts";
import modalReducer from './reducer_modal';
import userReducer from './reducer_users';
import coverUrlReducer from './reducer_cover_url';

const rootReducer = combineReducers({
  posts: PostsReducer,
  items: ItemsReducer,
  form: formReducer,
  modal: modalReducer,
  users: userReducer,
  upload_url: coverUrlReducer
});

export default rootReducer;
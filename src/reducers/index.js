import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ItemsReducer from "./reducer_items";
import PostsReducer from "./reducer_posts";
import modalReducer from './reducer_modal';
import userReducer from './reducer_users';

const rootReducer = combineReducers({
  posts: PostsReducer,
  items: ItemsReducer,
  form: formReducer,
  modal: modalReducer,
  users: userReducer
});

export default rootReducer;
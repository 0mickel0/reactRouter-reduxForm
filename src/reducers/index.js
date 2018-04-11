import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ItemsReducer from "./reducer_items";
import PostsReducer from "./reducer_posts";

const rootReducer = combineReducers({
  posts: PostsReducer,
  items: ItemsReducer,
  form: formReducer
});

export default rootReducer;
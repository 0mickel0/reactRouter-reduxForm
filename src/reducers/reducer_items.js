import _ from "lodash";
import { FETCH_WALL_ITEMS } from "../actions/vk-actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_WALL_ITEMS:
      return _.mapKeys(action.payload, "id");
    default:
      return state;
  }
}
import { combineReducers } from "redux";
import eventReducer from "../app/eventReducer";
const rootReducer = combineReducers({
  events: eventReducer,
});

export default rootReducer;

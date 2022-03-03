import { createStore, combineReducers } from "redux";
import classReducer from "redux/reducer";

const rootReducer = combineReducers({
  class: classReducer,
});

export const store = createStore(rootReducer);

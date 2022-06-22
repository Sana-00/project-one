import { reducer } from "./Reducer";

import { combineReducers } from "redux";

export const RootReducer = combineReducers({
  ourState: reducer,
});

import { RootReducer } from "./RootReducer";
import { createStore } from "redux";

export const store = createStore(
  RootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

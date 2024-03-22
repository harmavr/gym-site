import { createStore, combineReducers } from "redux";
import ProgramStore from "./reducer";
import CartStore from "../cart/reducer";

const rootReducer = combineReducers({
  program: ProgramStore,
  cart: CartStore,
});

const store = createStore(rootReducer);

export default store;

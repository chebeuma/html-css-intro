import { createStore, combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
//import balanceReducer from "./balance/balanceReducer";
//import pizzaReducer from "./pizza/pizzaReducer";
//const store = createStore(balanceReducer);
//import cakeReducer from "./cake/cakeReducer";

const rootReducer = combineReducers({
  cakeReducer: cakeReducer,
});

const store = createStore(rootReducer);
export default store;

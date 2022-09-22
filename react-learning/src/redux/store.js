import { createStore } from "redux";
//import balanceReducer from "./balance/balanceReducer";
import pizzaReducer from "./pizza/pizzaReducer";
//const store = createStore(balanceReducer);
const store = createStore(pizzaReducer);
export default store;

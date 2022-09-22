import { INCREMENT, DECREMENT } from "./pizzaTypes";
export function increment() {
  return {
    type: INCREMENT,
    payload: 10,
  };
}
export function decrement() {
  return {
    type: DECREMENT,
    payload: 10,
  };
}

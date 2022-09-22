import { BUY, RETURN } from "./pizzaTypes";
export function buyPizza() {
  return {
    type: BUY,
    payload: 1,
  };
}
export function returnPizza() {
  return {
    type: RETURN,
    payload: 1,
  };
}

import { BUY, RETURN } from "./pizzaTypes";
export function buy() {
  return {
    type: BUY,
    payload: 1,
  };
}
export function return() {
  return {
    type: RETURN,
    payload: 1,
  };
}

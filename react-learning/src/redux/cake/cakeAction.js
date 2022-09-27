import { cakesAvailable } from "./cakeReducer";
import { BUYCAKE, RETURNCAKE, RESETCAKE } from "./cakeTypes";
export function buyCake(payload) {
  return {
    type: BUYCAKE,
    payload,
  };
}

export function returnCake(payload) {
  return {
    type: RETURNCAKE,
    payload,
  };
}

export function resetCake() {
  return {
    type: RESETCAKE,
    payload: cakesAvailable,
  };
}

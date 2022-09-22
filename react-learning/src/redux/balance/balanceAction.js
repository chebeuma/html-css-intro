//this is my action creator
import { DEPOSITE, WITHDRAW } from "./balanceTypes";

function deposite() {
  return {
    type: DEPOSITE,
    payload: 10,
  };
}

//function withdraw() {
//return {
//type: WITHDRAW,
//payload: 10,
//};
//}

export const withdraw = () => ({ type: WITHDRAW, payload: 10 });

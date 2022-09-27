import { BUYCAKE, RETURNCAKE, RESETCAKE } from "./cakeTypes";

export const cakesAvailable = 30;
const cakeReducer = (availablity = cakesAvailable, action) => {
  switch (action.type) {
    case BUYCAKE:
      return availablity - action.payload;
    case RETURNCAKE:
      return availablity + action.payload;
    case RESETCAKE:
      return action.payload;
    default:
      return availablity;
  }
};
export default cakeReducer;

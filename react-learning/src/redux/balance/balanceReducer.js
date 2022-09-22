import { DEPOSITE, WITHDRAW } from "./balanceTypes";

const initialBalance = 100;
const balanceReducer = (balance = initialBalance, action) => {
  switch (action.type) {
    case DEPOSITE:
      return balance + action.payload;
    case WITHDRAW:
      return balance - action.payload;
    default:
      return balance;
  }
};
export default balanceReducer;

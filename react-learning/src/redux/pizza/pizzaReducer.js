import { BUY, RETURN } from "./pizzaTypes";

const initialPizza = 10;

const pizzaReducer = (pizza = initialPizza, action) => {
  switch (action.type) {
    case BUY:
      return pizza - action.type;
    case RETURN:
      return pizza + action.type;
    default:
      return pizza;
  }
};
export default pizzaReducer;

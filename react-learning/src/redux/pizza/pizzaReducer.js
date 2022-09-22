import { INCREMENT, DECREMENT } from "./pizzaTypes";

const initialPizza = 10;

const pizzaReducer = (pizza = initialPizza, action) => {
  switch (action.type) {
    case INCREMENT:
      return pizza + action.type;
    case DECREMENT:
      return pizza - action.type;
    default:
      return pizza;
  }
};
export default pizzaReducer;

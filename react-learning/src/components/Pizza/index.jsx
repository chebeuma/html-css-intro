import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/pizza/pizzaActions";

const Pizza = () => {
  const [availableinStore, setAvailable] = useState(10);

  const handleIncrement = () => {
    setAvailable((pastAvail) => pastAvail + 1);
  };

  const handleDecrement = () => {
    setAvailable((pastAvail) => pastAvail - 1);
  };

  return (
    <div>
      <h1 className="text-xl m-2">PizzaStore</h1>
      <h2 className="text-s m-2">AVAILABLE:{availableinStore}</h2>
      <button className="border border-black p-1 m-2" onClick={handleIncrement}>
        increment by 1
      </button>
      <button className="border border-black p-1 m-2" onClick={handleDecrement}>
        decrement by 1
      </button>
    </div>
  );
};
export default Pizza;

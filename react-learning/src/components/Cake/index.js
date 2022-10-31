import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { buyCake, returnCake, resetCake } from "../../redux/cake/cakeAction";

const Cake = () => {
  const CakeAvailableinStore = useSelector((state) => state);
  const dispatch = useDispatch();
  const [cakesBuy, setcakesBuy] = useState(1);

  const handleCakesBuy = (event) => {
    setcakesBuy(event.target.value);
  };
  const handleBuyCakes = () => {
    const action = buyCake(cakesBuy);
    dispatch(action);
  };
  const handleReturnCakes = () => {
    const action = returnCake(cakesBuy);
    dispatch(action);
  };
  const handleResetCakes = () => {
    const action = resetCake();
    dispatch(action);
  };

  return (
    <div>
      <h1>Cake Shop</h1>
      <h2>cakes Availabilty:{CakeAvailableinStore}</h2>

      <label>
        Number of cakes to buy:
        <input
          className="border p-1 rounded-md" type="number" min-{1}
          value={cakesBuy}
          onChange={handleCakesBuy}>
        </input>
      </label>
      <button className="border border-black p-1 m-2" onClick={handleBuyCakes}>
        buy cake
      </button>
      <button
        className="border border-black p-1 m-2"
        onClick={handleReturnCakes}
      >
        return Cake
      </button>
      <button
        className="border border-black p-1 m-2"
        onClick={handleResetCakes}
      >
        reset Cake
      </button>
    </div>
  );
};

export default Cake;

import { useDispatch, useSelector } from "react-redux";
import { add, substract } from "../../redux/cart/cartActions";

const Cart = () => {
	const availablity = useSelector((state) => state);
	const dispatch = useDispatch();

	const addChairs = () => {
		const action = add();
		dispatch(action);
	};
	const substractChairs = () => {
		const action = substract();
		dispatch(action);
	};

	return (
		<div>
			<div className="text-xl p-2">CART</div>
			<div className="flex flex-row">
				<div className="flex flex-col">
					<div className="flex w-1/12">
						<img
							src={require("../images/chair.jpeg")}
						></img>
					</div>
					<div className="flex">
						<h3 className="text-start">
							<strong>
								Osmond Armchair
							</strong>
						</h3>
						<div className="text-start text-sm">
							<strong>
								<span className="text-gray-400">
									Color
								</span>{" "}
								Gunnared beige
							</strong>
							<button
								className="border border-black p-1 m-1"
								onClick={
									substractChairs
								}
							>
								-
							</button>
							<h1>
								Avaialable:
								{availablity}
							</h1>
						</div>
					</div>
					<div className="flex text-xl">
						$149.99
					</div>
				</div>
				<div className="flex flex-col">
					<div>
						<img
							src={require("../images/chair1.jpeg")}
						></img>
					</div>
					<div className="flex">
						<h1 className="text-xl m-1 p-1">
							Merryl Lounge Chair
						</h1>
						<div className="text-start text-sm">
							<strong>
								<span className="text-gray-400">
									Color
								</span>{" "}
								Gunnared beige
							</strong>
							<button
								className="border border-black p-1 m-1"
								onClick={
									addChairs
								}
							>
								+
							</button>
							<h1>
								Avaialable:
								{availablity}
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Cart;

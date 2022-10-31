import { useDispatch, useSelector } from "react-redux";
import { add, substract } from "../../redux/cart/cartActions";
import React from "react";

const Cart = () => {
	const availablity = useSelector((state) => state);
	const dispatch = useDispatch();

	const addChairs = () => {
		const action = add(1);
		dispatch(action);
	};
	const substractChairs = () => {
		const action = substract();
		dispatch(action);
	};

	let textInput = React.createRef();

	function handleClick() {
		console.log(textInput.current.value);
		const action = add(textInput.current.value);
		dispatch(action);
	}

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
							<div>
								<input
									ref={
										textInput
									}
									placeholder="Type a message..."
								/>
								<div
									onClick={
										handleClick
									}
									className="icon"
								>
									bulk add
									<i className="fa fa-play" />
								</div>
							</div>
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
							<input
								type="text"
								name="name"
							></input>
							<button
								onClick={
									addChairs
								}
							>
								bulkadd
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

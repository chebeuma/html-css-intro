import { INCREASE, DECREASE } from "./cartTypes";

export const availablity = 10;
const cartReducer = (cartsAvaialable = availablity, action) => {
	switch (action.type) {
		case INCREASE:
			return cartsAvaialable - action.payload;
		case DECREASE:
			return cartsAvaialable + action.payload;
		default:
			return cartsAvaialable;
	}
};
export default cartReducer;

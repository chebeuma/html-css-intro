import { INCREASE, DECREASE } from "./cartTypes";
export function add(count) {
	return {
		type: INCREASE,
		payload: count,
	};
}
export function substract() {
	return {
		type: DECREASE,
		payload: 1,
	};
}

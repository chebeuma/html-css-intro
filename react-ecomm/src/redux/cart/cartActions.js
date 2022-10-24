import { INCREASE, DECREASE } from "./cartTypes";
export function add() {
	return {
		type: INCREASE,
		payload: 1,
	};
}
export function substract() {
	return {
		type: DECREASE,
		payload: 1,
	};
}

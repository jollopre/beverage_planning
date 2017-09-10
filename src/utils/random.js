import { isNumber } from './isNumber';

export const randomArbitrary = (min, max) => {
	return Math.random() * (max - min) + min;
}

export const twoFixed = (value) => {
	if (isNumber(value)) {
		return Math.round(value*100)/100;
	}
	return null;
}
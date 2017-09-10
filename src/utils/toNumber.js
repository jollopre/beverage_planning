import { isNumber } from './isNumber';

export const toNumber = (value) => {
	if (isNumber(value)) {
		return value;
	}
	const toNumber = Number(value);
	return !Number.isNaN(toNumber) ? toNumber : null;
}
import {
	GET_PRODUCTS_PRICES,
	UNKNOWN_PRODUCTS_PRICES,
	getProductsPrices
} from './productsPrices';

describe('getProductsPrices action creator', () => {
	it('should create getProductsPrices action given a number barId argument', () => {
		expect(getProductsPrices({ barId: 1 })).toHaveProperty('type', GET_PRODUCTS_PRICES);
		expect(getProductsPrices({ barId: 1 })).toHaveProperty('barId', 1);
	});
	it('should create getProductsPrices action given an argument that converts to number', () => {
		expect(getProductsPrices({ barId: '1' })).toHaveProperty('type', GET_PRODUCTS_PRICES);
		expect(getProductsPrices({ barId: '1' })).toHaveProperty('barId', 1);
	});
	it('should create an unknown action given an argument that NOT converts to number', () => {
		// Note null, [] or '' produce a 0 number which is valid
		expect(getProductsPrices({ barId: {}})).toEqual({
			type: UNKNOWN_PRODUCTS_PRICES
		});
		expect(getProductsPrices({ barId: '1a'})).toEqual({
			type: UNKNOWN_PRODUCTS_PRICES
		});
	});
});
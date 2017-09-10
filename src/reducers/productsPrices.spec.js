import { productsPrices } from './productsPrices';
import {
	GET_PRODUCTS_PRICES,
	UNKNOWN_PRODUCTS_PRICES,
} from '../actions/productsPrices';

describe('productsPrices reducer', () => {
	const initialState = {
		byBarId: {},
	};
	it('should return the initial state', () => {
		expect(productsPrices(undefined, {})).toEqual(initialState);
	});
	it('should handle getProductsPrices', () => {
		expect(productsPrices(initialState, {
			type: GET_PRODUCTS_PRICES,
			barId: 1,
			list: []
		})).toEqual({
			byBarId: {
				1: []
			}
		});
	});
	it('should handle unknown', () => {
		expect(productsPrices(initialState, {
			type: UNKNOWN_PRODUCTS_PRICES
		})).toEqual(initialState);
	});
});

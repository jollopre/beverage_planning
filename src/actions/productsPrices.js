import { Seed } from '../utils/seed';
import { toNumber } from '../utils/toNumber';

export const GET_PRODUCTS_PRICES = 'GET_PRODUCTS_PRICES';
export const UNKNOWN_PRODUCTS_PRICES = 'UNKNOWN_PRODUCTS_PRICES';

export const getProductsPrices = ({ barId = null } = {}) => {
	const barIdConverted = toNumber(barId);
	if (barIdConverted) {
		return {
			type: GET_PRODUCTS_PRICES,
			barId: barIdConverted,
			list: Seed.currentPrices(barIdConverted)
		};
	}
	return {
		type: UNKNOWN_PRODUCTS_PRICES
	};
};
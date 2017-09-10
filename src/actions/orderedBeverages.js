import { toNumber } from '../utils/toNumber';
export const ADD_ORDERED_BEVERAGES = 'ADD_ORDERED_BEVERAGES';
export const DESTROY_ORDERED_BEVERAGES = 'DESTROY_ORDERED_BEVERAGES';
export const DESTROY_ALL_ORDERED_BEVERAGES = 'DESTROY_ALL_ORDERED_BEVERAGES';
export const UNKNOWN_ORDERED_BEVERAGES = 'UNKNOWN_ORDERED_BEVERAGES';

const addDestroyCreator = (type, productId, currentPrice, roundId) => {
	const productIdConverted = toNumber(productId);
	const currentPriceConverted = toNumber(currentPrice);
	const roundIdConverted = toNumber(roundId);
	if (productIdConverted && currentPriceConverted && roundIdConverted) {
		return {
			type,
	    	product_id: productIdConverted,
	    	current_price: currentPriceConverted,
	    	round_id: roundIdConverted
	    };
	}
	return {
		type: UNKNOWN_ORDERED_BEVERAGES
	};
}

export const addOrderedBeverage = ({ productId = null, currentPrice = null, roundId = null } = {}) =>
	addDestroyCreator(ADD_ORDERED_BEVERAGES, productId, currentPrice, roundId);

export const destroyOrderedBeverage = ({ productId = null, currentPrice = null, roundId = null } = {}) =>
	addDestroyCreator(DESTROY_ORDERED_BEVERAGES, productId, currentPrice, roundId);

export const destroyAllOrderedBeverage = (id) => ({
	type: DESTROY_ALL_ORDERED_BEVERAGES,
	id,
});
import {
	ADD_ORDERED_BEVERAGES,
	DESTROY_ORDERED_BEVERAGES,
	UNKNOWN_ORDERED_BEVERAGES,
	addOrderedBeverage,
	destroyOrderedBeverage
} from './orderedBeverages';

describe('addOrderedBeverage action creator', () => {
	it('should create addOrderedBeverage action given all arguments as number', () => {
		expect(addOrderedBeverage({ productId: 1, currentPrice: 2.5, roundId: 1})).toEqual({
			type: ADD_ORDERED_BEVERAGES,
			product_id: 1,
			current_price: 2.5,
			round_id: 1
		});
	});
	it('should create addOrderedBeverage action given arguments that convert to number', () => {
		expect(addOrderedBeverage({ productId: '1', currentPrice: 2.5, roundId: '1'})).toEqual({
			type: ADD_ORDERED_BEVERAGES,
			product_id: 1,
			current_price: 2.5,
			round_id: 1
		});
	});
	it('should create an unknown action given any argument that NOT converts to number', () => {
		expect(addOrderedBeverage({ productId: '1a', currentPrice: 2.5, roundId: '1'})).toEqual({
			type: UNKNOWN_ORDERED_BEVERAGES
		});
	});
});

describe('destroyOrderedBeverage action creator', () => {
	it('should create destroyOrderedBeverage action given all arguments as number', () => {
		expect(destroyOrderedBeverage({ productId: 1, currentPrice: 2.5, roundId: 1})).toEqual({
			type: DESTROY_ORDERED_BEVERAGES,
			product_id: 1,
			current_price: 2.5,
			round_id: 1
		});
	});
	it('should create destroyOrderedBeverage action given arguments that convert to number', () => {
		expect(destroyOrderedBeverage({ productId: '1', currentPrice: 2.5, roundId: '1'})).toEqual({
			type: DESTROY_ORDERED_BEVERAGES,
			product_id: 1,
			current_price: 2.5,
			round_id: 1
		});
	});
	it('should create an unknown action given any argument that NOT converts to number', () => {
		expect(destroyOrderedBeverage({ productId: '1a', currentPrice: 2.5, roundId: '1'})).toEqual({
			type: UNKNOWN_ORDERED_BEVERAGES
		});
	});
});
import { GenerateId } from './generateId'; 
import { isNumber } from './isNumber';
import { randomArbitrary, twoFixed } from './random';
/**
 * Seed module
 * @module utils/seed
 */

export const Seed = (() => {
	const roundIdGenerator = GenerateId();
	const orderedBeveragesIdGenerator = GenerateId();
	const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
	return {
		/**
		 * Gets a map of all the bars whose keys are the barIds and values are Bar objects.
		 * @return {Map} The list of bars.
		 */
		bars() {
			return ids.reduce((acc, id) => {
				return Object.assign({}, acc, { [id] : {
					id,
					name: `Bar ${id}`,
					lat: 0.0,
					long: 0.0,
					image_url: `http://lorempixel.com/256/256/nightlife/${id}/`,	// Limited to 10
				}});
			}, {});
		},
		/**
		 * Gets a map of all the products whose keys are bar productIds and values
		 * are Product objects.
		 */
		products() {
			return ids.reduce((acc, id) => {
				return Object.assign({}, acc, { [id] : {
					id,
					name: `Product ${id}`,
					image_url: `http://lorempixel.com/64/64/food/${id}/`,	// Limited to 10
				}});
			}, {});
		},
		/**
		 * Gets an array of objects where each object contains bar_id, product object and
		 * its current_price
		 * @param {Number} barId - The id of a bar
		 * @return {Array} An array of objects with bar_id, product object and current_price
		 * otherwise undefined
		 */
		currentPrices(barId) {
			if (isNumber(barId)) {
				if(ids[barId - 1]) {
					const products = this.products();
					return Object.keys(products).reduce((acc, productId) => {
						return acc.concat([{
							bar_id: barId,
							product: products[productId],
							current_price: twoFixed(randomArbitrary(1, 20))
						}]);
					}, []);
				}
			}
		},
		createRound(barId) {
			if (isNumber(barId)) {
				if (ids[barId - 1]) {
					return {
						id: roundIdGenerator(),
						bar_id: barId,
						ordered_at: Date.now(),
					};
				}
			}
		},
		createOrderedBeverage({ roundId = null, productId = null, actualPrice = null } = {}) {
			if (isNumber(roundId) && isNumber(productId) && isNumber(actualPrice)) {
				return {
					id: orderedBeveragesIdGenerator(),
					round_id: roundId,
					product_id: productId,
					actual_price: actualPrice,
				}	
			}
		},
	}
})();
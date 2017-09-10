import {
	ADD_ORDERED_BEVERAGES,
	DESTROY_ORDERED_BEVERAGES,
	DESTROY_ALL_ORDERED_BEVERAGES
	} from '../actions/orderedBeverages';
import { Seed } from '../utils/seed';

export const orderedBeverages = (state = { byId : {} }, action) => {
	/*
	 * Returns the orderedBeverage id if exists an orderedBeverage whose
	 * pruduct_id and round_id matches the arguments passed.
	 * Otherwise, returns undefined.
	 * @param { Object } state - the state object to look for
	 * @param { Number } productId - the id of the product
	 * @param { Number } roundId - the id of the round
	 * @return { Number } or undefined 
	 */
	const findOrderedBeverage = (state, productId, roundId) => {
		return Object.keys(state).find(id =>
			state[id].product_id===productId &&
			state[id].round_id===roundId);
	}
	let idFound;
	switch(action.type){
		case ADD_ORDERED_BEVERAGES:
			idFound = findOrderedBeverage(state.byId,
				action.product_id, action.round_id);
			if (idFound) {
				const found = state.byId[idFound];
				return Object.assign({}, state, {
					byId : Object.assign({}, state.byId,
						{ [found.id] :
							Object.assign({},
								state.byId[found.id],
								{ actual_price: state.byId[found.id].actual_price +
									action.current_price })})
				});
			}
			const orderedBeverage = Seed.createOrderedBeverage({
				roundId: action.round_id,
				productId: action.product_id,
				actualPrice: action.current_price
			});
			return Object.assign({}, state, {
				byId : Object.assign({}, state.byId, { [orderedBeverage.id] : orderedBeverage })
			});
		case DESTROY_ORDERED_BEVERAGES:
			idFound = findOrderedBeverage(state.byId,
				action.product_id, action.round_id);
			if (idFound) {
				const found = state.byId[idFound];
				if (state.byId[found.id].actual_price - action.current_price === 0) {
					return Object.assign(
						{},
						state,
						{ 
							byId: Object.keys(state.byId).reduce((acc, id) => {
								const idConverted = Number(id);
								if (found.id !== idConverted) {
									return Object.assign(acc, { [idConverted] : state.byId[idConverted] });
								}
								return acc;
							}, {})
						});
				}
				else {
					return Object.assign({}, state, {
						byId : Object.assign({}, state.byId,
							{ [found.id] :
								Object.assign({},
									state.byId[found.id],
									{ actual_price: state.byId[found.id].actual_price -
										action.current_price })})
						});
				}
			}
			return state;
		case DESTROY_ALL_ORDERED_BEVERAGES:
			if (state.byId[action.id]) {
				return Object.assign(
					{},
					state,
					{ 
						byId: Object.keys(state.byId).reduce((acc, id) => {
							const idConverted = Number(id);
							if (action.id !== idConverted) {
								return Object.assign(acc, { [idConverted] : state.byId[idConverted] });
							}
							return acc;
						}, {})
					});
			}
			return state;
		default:
			return state;
	}
}
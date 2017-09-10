import { GET_PRODUCTS_PRICES } from '../actions/productsPrices';

export const productsPrices = (state = { byBarId: {} }, action) => {
	switch(action.type){
		case GET_PRODUCTS_PRICES:
			return Object.assign({}, state, {
				byBarId : Object.assign({},
					state.byBarId,
					{ [action.barId]: action.list })
			});
		default:
			return state;
	}
}
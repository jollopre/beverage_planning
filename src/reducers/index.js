import { combineReducers } from 'redux';
import { bars } from './bars';
import { productsPrices } from './productsPrices';
import { rounds } from './rounds';
import { orderedBeverages } from './orderedBeverages';

export const rootReducer = combineReducers({
	bars,
	productsPrices,
	rounds,
	orderedBeverages
});
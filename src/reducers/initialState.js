import { Seed } from '../utils/seed';

export const initialState = {
	bars: {
		byId: Seed.bars(),	// Map whose key is bar id and value is Bar object
		filterByName: null,	
	},
	productsPrices: {
		byBarId: {},	// Map whose key is bar id and value is Product object and current_price
	},
	rounds: {
		byId: {},	// Map whose key is round id and value is Round object
	},
	orderedBeverages: {
		byId: {},	// Map whose key is orderedBeverage id and value is OrderedBeverage object
	}
};
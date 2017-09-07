import { BARS_FILTER_BY_NAME } from '../actions/bars';

export const bars = (state = { list: [], filterByName: null }, action) => {
	switch(action.type){
		case BARS_FILTER_BY_NAME: 
			return {
				...state,
				filterByName: action.filter,
			}
		default:
			return state;
	}
}
import { FILTER_BY_NAME_BARS } from '../actions/bars';

export const bars = (state = { byId: {}, filterByName: null }, action) => {
	switch(action.type){
		case FILTER_BY_NAME_BARS: 
			return Object.assign(
				{}, state, { filterByName: action.filter });
		default:
			return state;
	}
}
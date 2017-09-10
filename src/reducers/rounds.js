import { CREATE_ROUNDS } from '../actions/rounds';

export const rounds = (state = { byId: {} }, action) => {
	switch(action.type){
		case CREATE_ROUNDS:
			return Object.assign({}, state, {
				byId : Object.assign({}, state.byId, { [action.round.id] : action.round })});
		default:
			return state;
	}
}
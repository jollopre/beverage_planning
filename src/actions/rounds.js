import { Seed } from '../utils/seed';
import { toNumber } from '../utils/toNumber';

export const CREATE_ROUNDS = 'CREATE_ROUNDS';
export const UNKNOWN_ROUNDS = 'UNKNOWN_ROUNDS';

export const createRound = ({ history = null, barId = null } = {}) => {
	const barIdConverted = toNumber(barId);
	if (barIdConverted) {
		const round = Seed.createRound(barId);
		if (history) {
	    	history.push(`/rounds/${round.id}`); 
	    }
	    return {
	    	type: CREATE_ROUNDS,
	    	round
	    }; 
	}
	else {
		return {
			type: UNKNOWN_ROUNDS
		}
	}
};


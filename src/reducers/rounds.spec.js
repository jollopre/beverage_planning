import { rounds } from './rounds';
import {
	CREATE_ROUNDS,
	UNKNOWN_ROUNDS,
} from '../actions/rounds';

describe('productsPrices reducer', () => {
	const initialState = {
		byId: {},
	};
	it('should return the initial state', () => {
		expect(rounds(undefined, {})).toEqual(initialState);
	});
	it('should handle createRounds', () => {
		const date = Date.now();
		expect(rounds(initialState, {
			type: CREATE_ROUNDS,
			round: {
				id: 1,
				bar_id: 1,
				ordered_at: date
			}
		})).toEqual({
			byId: {
				1: {
					id: 1,
					bar_id: 1,
					ordered_at: date
				}
			}
		});
	});
	it('should handle unknown', () => {
		expect(rounds(initialState, {
			type: UNKNOWN_ROUNDS
		})).toEqual(initialState);
	});
});
import {
	CREATE_ROUNDS,
	UNKNOWN_ROUNDS,
	createRound
} from './rounds';

describe('createRound action creator', () => {
	it('should create createRound action given a number barId argument', () => {
		expect(createRound({ barId: 1 })).toHaveProperty('type', CREATE_ROUNDS);
		expect(createRound({ barId: 1 })).toHaveProperty('round');
		expect(createRound({ barId: 1 })).toHaveProperty('round.id');
		expect(createRound({ barId: 1 })).toHaveProperty('round.bar_id', 1);
		expect(createRound({ barId: 1 })).toHaveProperty('round.ordered_at');
	});
	it('should create createRound action given an argument that converts to number', () => {
		expect(createRound({ barId: '1' })).toHaveProperty('type', CREATE_ROUNDS);
		expect(createRound({ barId: '1' })).toHaveProperty('round');
	});
	it('should create an unknown action given an argument that NOT converts to number', () => {
		// Note null, [] or '' produce a 0 number which is valid
		expect(createRound({ barId: {}})).toEqual({
			type: UNKNOWN_ROUNDS
		});
		expect(createRound({ barId: '1a'})).toEqual({
			type: UNKNOWN_ROUNDS
		});
	});
});
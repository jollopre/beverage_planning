import { bars } from './bars';
import { FILTER_BY_NAME_BARS, UNKNOWN_BARS } from '../actions/bars';

describe('bars reducer', () => {
	const initialState = {
		byId: {},
		filterByName: null
	};
	it('should return the initial state', () => {
		expect(bars(undefined, {})).toEqual(initialState);
	});
	it('should handle filterByName', () => {
		expect(bars(initialState, {
			type: FILTER_BY_NAME_BARS,
			filter: 'aaa'
		})).toEqual({
			byId: {},
			filterByName: 'aaa'
		});
	});
	it('should handle unknown', () => {
		expect(bars(initialState, {
			type: UNKNOWN_BARS
		})).toEqual(initialState);
	});
});
import {
    FILTER_BY_NAME_BARS,
    UNKNOWN_BARS,
    filterByName 
} from './bars';

describe('filterByName action creator', () => {
    it('should create filterByName action given a string filter argument', () => {
    	expect(filterByName({ filter: 'bar'})).toEqual({
    		type: FILTER_BY_NAME_BARS,
    		filter: 'bar'
    	});
    });
    it('should create an unknown action given a non-string filter argument', () =>  {
    	expect(filterByName({ filter: 1 })).toEqual({
    		type: UNKNOWN_BARS
    	});
    	expect(filterByName({ filter: {} })).toEqual({
    		type: UNKNOWN_BARS
    	});
    	expect(filterByName({ filter: [] })).toEqual({
    		type: UNKNOWN_BARS
    	});
    	expect(filterByName({ filter: null })).toEqual({
    		type: UNKNOWN_BARS
    	});
    	expect(filterByName({ filter: undefined })).toEqual({
    		type: UNKNOWN_BARS
    	});
    	expect(filterByName()).toEqual({
    		type: UNKNOWN_BARS
    	});
    });
});
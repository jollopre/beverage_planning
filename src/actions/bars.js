export const FILTER_BY_NAME_BARS = 'FILTER_BY_NAME_BARS';
export const UNKNOWN_BARS = 'UNKNOWN_BARS';

export const filterByName = ({ history = null, filter = null } = {}) => {
	if (typeof filter === 'string') {
		if (history) {
			history.push(`/bars/${filter}`);
		} 
		return {
			type: FILTER_BY_NAME_BARS,
			filter
		};
	}
	return {
		type: UNKNOWN_BARS
	}
};
export const BARS_FILTER_BY_NAME = 'BARS_FILTER_BY_NAME';

export const filterByName = (filter) => ({
	type: BARS_FILTER_BY_NAME,
	filter: typeof filter === 'string' ? filter : null,
});
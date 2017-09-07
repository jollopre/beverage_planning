import { Seed } from '../utils/seed';

export const initialState = {
	bars: {
		list: Seed.bars(),
		filterByName: null,
	}
};
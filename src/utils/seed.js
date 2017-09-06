/**
 * Seed module
 * @module utils/seed
 */

export const Seed = {
	/**
	 * Gets a list of all the bars.
	 * @return {Array} The list of bars.
	 */
	bars() {
		/*
		id SERIAL NOT NULL PRIMARY KEY,
		name TEXT NOT NULL,
		lat DECIMAL(18,4) NULL,
		long DECIMAL(18,4) NULL,
		image_url TEXT NULL
		*/
		const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		return ids.map(id => ({
			id,
			name: `Bar ${id}`,
			lat: 0.0,
			long: 0.0,
			image_url: `http://lorempixel.com/64/64/food/${id}/`,	// Limited to 10
		}));
	},
	products() {
		/*
		id SERIAL NOT NULL PRIMARY KEY,
		name text NOT NULL,
		image_url TEXT NULL
		*/
		const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		return ids.map(id => ({
			id,
			name: `Product ${id}`,
			image_url: `http://lorempixel.com/64/64/nightlife/${id}/`,	// Limited to 10 
		}));
	}
}
import PropTypes from 'prop-types';
/*
	id SERIAL NOT NULL PRIMARY KEY,
	name TEXT NOT NULL,
	lat DECIMAL(18,4) NULL,
	long DECIMAL(18,4) NULL,
	image_url TEXT NULL
*/
export const BarShape = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	lat: PropTypes.number.isRequired,
	long: PropTypes.number.isRequired,
	image_url: PropTypes.string.isRequired,
});

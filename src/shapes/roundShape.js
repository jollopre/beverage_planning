import PropTypes from 'prop-types';
/*
	id SERIAL NOT NULL PRIMARY KEY,
	bar_id INT NOT NULL
	ordered_at TIMESTAMP NOT NULL
*/
export const RoundShape = PropTypes.shape({
	id: PropTypes.number.isRequired,
	bar_id: PropTypes.number.isRequired,
	ordered_at: PropTypes.number.isRequired,
});
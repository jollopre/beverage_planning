import PropTypes from 'prop-types';
/*
	id SERIAL NOT NULL PRIMARY KEY,
	round_id INT NOT NULL,
	product_id INT NOT NULL,
	actual_price DECIMAL(18,4) NOT NULL
*/
export const OrderedBeverageShape = PropTypes.shape({
	id: PropTypes.number.isRequired,
	round_id: PropTypes.number.isRequired,
	product_id: PropTypes.number.isRequired,
	actual_price: PropTypes.number.isRequired,
});
import PropTypes from 'prop-types';
/* Product
	id SERIAL NOT NULL PRIMARY KEY,
	name text NOT NULL,
	image_url TEXT NULL
*/
/* CurrentPrice
	bar_id INT NOT NULL,
	product_id INT NOT NULL,
	current_price DECIMAL(12,2) NOT NULL
*/

export const ProductPriceShape = PropTypes.shape({
	bar_id: PropTypes.number.isRequired,
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		image_url: PropTypes.string.isRequired,
	}),
	current_price: PropTypes.number.isRequired
});
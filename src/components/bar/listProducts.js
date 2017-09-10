import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemProduct from './listItemProduct';

export default class ListProducts extends Component {
	render() {
		const { list } = this.props;
		return (
			<div>
				{list.map(item => (<ListItemProduct
					key={item.product.id}
					productPrice={item} />))}
			</div>
		);
	}
}

ListProducts.propTypes = {
	list: PropTypes.array.isRequired,
};
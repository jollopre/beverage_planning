import React, { Component } from 'react';
import DeleteAllOrderedBeverage from './deleteAllOrderedBeverage';
import AddOrderedBeverage from './addOrderedBeverage';
import DeleteOrderedBeverage from './deleteOrderedBeverage';
import { OrderedBeverageShape } from '../../shapes/orderedBeverageShape';
import { ProductPriceShape } from '../../shapes/productPriceShape';
import { twoFixed } from '../../utils/random';

export default class ListItemOrderedBeverage extends Component {
	render() {
		const { orderedBeverage, productPrice } = this.props;
		const quantity = twoFixed(orderedBeverage.actual_price/productPrice.current_price);
		return (
			<div className="well">
				<DeleteAllOrderedBeverage id={orderedBeverage.id} />
				<h4>{productPrice.product.name}</h4>
				<div className="pull-left">
					<ul className="list-inline">
						<li><strong>Quantity: </strong>{quantity}</li>
						<li>
							<AddOrderedBeverage
								productPrice={productPrice} />
						</li>
						<li>
							<DeleteOrderedBeverage	
								productPrice={productPrice} />
						</li>
					</ul>
				</div>
				<div className="pull-right">
					<strong>Price: </strong>{`$${twoFixed(orderedBeverage.actual_price)}`}
				</div>
				<div className="clearfix" />
			</div>
		);
	}
}

ListItemOrderedBeverage.propTypes = {
	orderedBeverage: OrderedBeverageShape,
	productPrice: ProductPriceShape,
}
import React, { Component } from 'react';
import AddOrderedBeverage from '../round/addOrderedBeverage';
import { ProductPriceShape } from '../../shapes/productPriceShape';

export default class ListItemProduct extends Component {
	render() {
		const { productPrice } = this.props;
		return (
			<div className="list-group">
				<div className="list-group-item">
					<h4 className="list-group-item-heading">
						{productPrice.product.name}
					</h4>
					<div className="list-group-item-text">
						<div className="row">
							<div className="col-xs-6">
								<img
									src={productPrice.product.image_url}
									alt={productPrice.product.name} />
							</div>
							<div className="col-xs-6">
								<div className="pull-right">
									<ul className="list-inline">
										<li>
											<h4>{`$${productPrice.current_price}`}</h4>
										</li>
										<li>
											<AddOrderedBeverage
												productPrice={productPrice} />
										</li>
									</ul>
								</div>
								<div className="clearfix" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ListItemProduct.propTypes = {
	productPrice: ProductPriceShape,
};
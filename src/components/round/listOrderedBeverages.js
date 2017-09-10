import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TakeRound from './takeRound';
import ListItemOrderedBeverage from './listItemOrderedBeverage';
import { twoFixed } from '../../utils/random';

export default class ListOrderedBeverages extends Component {
	render() {
		const { list, productsPricesByProduct } = this.props;
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<div className="pull-left">
						<h4>Order List</h4>
					</div>
					<div className="pull-right">
						<TakeRound />
					</div>
					<div className="clearfix" />
				</div>
				<div className="panel-body">
				{list.map(item => (
					<ListItemOrderedBeverage
							key={item.id}
							orderedBeverage={item}
							productPrice={productsPricesByProduct[item.product_id]}
					/>))}
				</div>
				<div className="panel-footer">
					<div className="pull-left">
						<strong>TOTAL</strong>
					</div>
					<div className="pull-right">
						${`${twoFixed(list.reduce((acc,item) => {
							return acc+item.actual_price;
						}, 0))}`}
					</div>
					<div className="clearfix" />
				</div>
			</div>
		);
	}
}

ListOrderedBeverages.propTypes = {
	list: PropTypes.array.isRequired,
	productsPricesByProduct: PropTypes.object.isRequired,
};
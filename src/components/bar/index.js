import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BarHeader from './barHeader';
import NewRound from './newRound';
import ListProducts from './listProducts';
import { BarShape } from '../../shapes/barShape';

export default class Bar extends Component {
	render() {
		const { bar, productsPrices } = this.props;
		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						<BarHeader bar={bar} />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<div className="pull-right">
							<NewRound barId={bar.id} />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<ListProducts list={productsPrices} />
					</div>
				</div>
			</div>
		);
	}
}

Bar.propTypes = {
	bar: BarShape.isRequired,
	productsPrices: PropTypes.array.isRequired,
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListProducts from '../bar/listProducts';
import ListOrderedBeverages from './listOrderedBeverages';
import { RoundShape } from '../../shapes/roundShape';

export default class Round extends Component {
    componentDidMount() {
        const { productsPrices, getProductsPrices, round } = this.props;
        if(productsPrices.length === 0 ){
            getProductsPrices(round.bar_id);
        }
    }
	render() {
        const { round,
            orderedBeverages,
            productsPrices,
            productsPricesByProduct } = this.props;
		return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="text-center">{`Round ${round.id}`}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <ListProducts list={productsPrices} />
                    </div>
                    <div className="col-xs-6">
                        <div className="row">
                            <div className="col-xs-12">
                                <ListOrderedBeverages
                                    list={orderedBeverages}
                                    productsPricesByProduct={productsPricesByProduct} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
	}
}

Round.propTypes = {
    round: RoundShape.isRequired,
    orderedBeverages: PropTypes.array.isRequired,
    productsPrices: PropTypes.array.isRequired,
    productsPricesByProduct: PropTypes.object.isRequired,
    getProductsPrices: PropTypes.func.isRequired,
}

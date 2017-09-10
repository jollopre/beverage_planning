import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getProductsPrices } from '../actions/productsPrices';
import Round from '../components/round';

class RoundContainer extends Component {
    render() {
        const {
            round,
            orderedBeverages,
            productsPrices,
            productsPricesByProduct,
            getProductsPrices } = this.props;
        return round ? <Round
                            round={round}
                            orderedBeverages={orderedBeverages}
                            productsPrices={productsPrices}
                            productsPricesByProduct={productsPricesByProduct}
                            getProductsPrices={getProductsPrices} /> :
                        <Redirect to="/bars"/>
    }
}

const mapStateToProps = (state, ownProps) => {
    const { rounds, orderedBeverages, productsPrices } = state;
    const { match } = ownProps;
    const round = rounds.byId[match.params.roundId];

    if(round) {
        const listOrderedBeverages = Object.keys(orderedBeverages.byId).reduce((acc, id) => {
            if(orderedBeverages.byId[id].round_id === round.id) {
                return acc.concat([orderedBeverages.byId[id]]);
            }
            return acc;
        }, []);

        const productsPricesByProduct = (productsPrices.byBarId[round.bar_id] || []).reduce((acc, productPrice) => {
            return Object.assign({}, acc, { [productPrice.product.id]: productPrice });
        },{});

        return {
            round,
            orderedBeverages: listOrderedBeverages,
            productsPrices: productsPrices.byBarId[round.bar_id] || [],
            productsPricesByProduct
        };
    }
    return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getProductsPrices: (barId) => {
            dispatch(getProductsPrices({ barId }));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundContainer);
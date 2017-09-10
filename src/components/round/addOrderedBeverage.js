import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addOrderedBeverage } from '../../actions/orderedBeverages';
import { ProductPriceShape } from '../../shapes/productPriceShape';

class AddOrderedBeverage extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        const { add, productPrice, roundId } = this.props
        add(productPrice, roundId);
    }
    render() {
        const { roundId } = this.props;
        return (roundId ? 
            (<form onSubmit={this.onSubmit}>
                <button
                    className="btn btn-default"
                    type="submit"
                    aria-label="Add Ordered Beverage">
                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                </button>
            </form>) : null );
    }
}

const mapStateToProps = (state, ownProps) => {
    const roundId = ownProps.match.params.roundId;
    return { roundId: roundId || null };
} 
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add: (productPrice, roundId) => {
            dispatch(addOrderedBeverage({
                productId: productPrice.product.id,
                currentPrice: productPrice.current_price,
                roundId }));
        }
    };
}

AddOrderedBeverage.propTypes = {
    productPrice: ProductPriceShape,
    //roundId: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddOrderedBeverage));
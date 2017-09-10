import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { destroyOrderedBeverage } from '../../actions/orderedBeverages';
import { ProductPriceShape } from '../../shapes/productPriceShape';

class DeleteOrderedBeverage extends Component {
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
        const { productPrice, roundId, destroy } = this.props;
        destroy(productPrice, roundId);
	}
	render() {
        const { roundId } = this.props;
        return (roundId ? 
            (<form onSubmit={this.onSubmit}>
                <button
                    className="btn btn-default"
                    type="submit"
                    aria-label="Add Ordered Beverage">
                    <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
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
        destroy: (productPrice, roundId) => {
            dispatch(destroyOrderedBeverage({
                productId: productPrice.product.id,
                currentPrice: productPrice.current_price,
                roundId }));
        }
    };
}

DeleteOrderedBeverage.propTypes = {
    productPrice: ProductPriceShape,
    //roundId: PropTypes.number.isRequired,
    destroy: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteOrderedBeverage));
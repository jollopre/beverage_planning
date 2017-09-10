import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getProductsPrices } from '../actions/productsPrices';
import Bar from '../components/bar';

class BarContainer extends Component {
	componentDidMount() {
		const { productsPrices, getProductsPrices } = this.props;
		if (productsPrices.length === 0 ) {
			getProductsPrices();
		}
	}
	render() {
		const { bar, productsPrices } = this.props;
		return bar ? <Bar bar={bar} productsPrices={productsPrices} /> :
			<Redirect to="/bars" />
	}
}

const mapStateToProps = (state, ownProps) => {
	const { bars, productsPrices } = state;
	const barId = ownProps.match.params.barId;
	return {
		bar: bars.byId[barId],
		productsPrices: productsPrices.byBarId[barId] || [],
	};
}
const mapDispatchToProps = (dispatch, ownProps) => {
	const barId = ownProps.match.params.barId;
	return {
		getProductsPrices: () => {
			dispatch(getProductsPrices({ barId }));
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(BarContainer);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { destroyAllOrderedBeverage } from '../../actions/orderedBeverages';

class DeleteAllOrderedBeverage extends Component {
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		const { destroy } = this.props;
		destroy();
	}
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<button type="submit" className="close"
					aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
            </form>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { id } = ownProps;
    return {
        destroy: () => {
            dispatch(destroyAllOrderedBeverage(id));
        }
    };
}

DeleteAllOrderedBeverage.propTypes = {
	id: PropTypes.number.isRequired,
	destroy: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(DeleteAllOrderedBeverage);

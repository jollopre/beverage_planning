import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createRound } from '../../actions/rounds';

class NewRound extends Component {
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		const { createRound } = this.props;
		createRound();
	}
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<button className="btn btn-default" type="submit">Round</button>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const { history, barId } = ownProps;
	return {
		createRound: () => {
			return dispatch(createRound({ history, barId }));
		}
	}
}

NewRound.propTypes = {
	barId: PropTypes.number.isRequired,
	createRound: PropTypes.func.isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(NewRound));

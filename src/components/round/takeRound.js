import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RoundShape } from '../../shapes/roundShape';

class TakeRound extends Component {
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		const { history, round } = this.props;
		history.push(`/bars/${round.bar_id}`);
	}
	anyOrderedBeverages() {
		const { round, orderedBeverages } = this.props;
		return Object.keys(orderedBeverages)
			.find(id => orderedBeverages[id].round_id === round.id) !== undefined;
	}
	render() {
		return (this.anyOrderedBeverages() ?
			(<form onSubmit={this.onSubmit}>
				<button className="btn btn-default" type="submit">Take Round</button>
			</form>) : null
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { rounds, orderedBeverages } = state;
	const { match } = ownProps;
	const round = rounds.byId[match.params.roundId]; // TODO check roundId exist
	return { round, orderedBeverages: orderedBeverages.byId };
}

TakeRound.propTypes = {
	round: RoundShape,
	orderedBeverages: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps)(TakeRound));
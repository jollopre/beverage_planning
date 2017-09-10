import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { filterByName } from '../actions/bars';

export class SearchBar extends Component {
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e){
		const { filterByName } = this.props;
		e.preventDefault();
		if (this.input.value.trim()){
			filterByName(this.input.value);
		}
	}
	render() {
		return (
			<form className="navbar-form navbar-right" onSubmit={this.onSubmit}>
				<div className="input-group">
					<label className="sr-only" htmlFor="searchBarInput">Type bar name</label>
					<input
						type="text"
						className="form-control"
						id="searchBarInput"
						placeholder="Type bar name"
						ref={node => { this.input = node }}
					/>
					<span className="input-group-btn">
						<button
							className="btn btn-default"
							type="submit"
							aria-label="Search bars"
						>
							<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
						</button>
					</span>
				</div>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	filterByName: (name) => {
		dispatch(filterByName({ history: ownProps.history, filter: name }));
	}
});

SearchBar.propTypes = {
	filterByName: PropTypes.func.isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));

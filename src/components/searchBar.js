import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<form>
				<div className="form-group">
					<label className="sr-only" htmlFor="searchBarInput">Type bar name</label>
					<input
						type="text"
						className="form-control"
						id="searchBarInput"
						placeholder="Type bar name"
					/>
				</div>
			</form>
		);
	}
}
import React, { Component } from 'react';
import SearchBar from './searchBar';

export default class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-inverse">
				<div className="collapse navbar-collapse" id="navbar-collapse-1">
					<p className="navbar-text">Beverage Planning - Compose lists of drink orders</p>
					<SearchBar />
				</div>
			</nav>
		);
	}
}
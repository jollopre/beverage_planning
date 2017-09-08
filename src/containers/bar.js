import React, { Component } from 'react';

export default class Bar extends Component {
	render() {
		const { match } = this.props;
		return (<p>{`Bar ${match.params.barId} selected`}</p>);
	}
}
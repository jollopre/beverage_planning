import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BarShape } from '../../shapes/barShape';

export default class BarHeader extends Component{
	render() {
		const { bar } = this.props;
		return (
			<div>
				<div className="pull-left">
					<h2>{`Products for ${bar.name}`}</h2>
				</div>
				<div className="pull-right">
					<Link to={'/bars'}>Back to Bars</Link>
				</div>
				<div className="clearfix" />
			</div>
		);
	}
}

BarHeader.propTypes = {
	bar: BarShape.isRequired,
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AlertInfo extends Component {
	render() {
		const { show, children } = this.props;
		return show ? (
			<div className="alert alert-info" role="alert">
				{children}
			</div>
		) : null;
	}
}
AlertInfo.propTypes = {
	show: PropTypes.bool.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.element.isRequired,
		PropTypes.string.isRequired]),
};
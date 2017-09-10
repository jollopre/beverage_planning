import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemBar from './listItemBar';

export default class ListBar extends Component {
	render() {
		const { list } = this.props;
		const view = list.map(item => (<ListItemBar key={item.id} bar={item} />));
		return <div className="row">{view}</div>;
	}
}

ListBar.propTypes = {
	list: PropTypes.array.isRequired,
};
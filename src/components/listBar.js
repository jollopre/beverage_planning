import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemBar from './listItemBar';

export default class ListBar extends Component {
	render() {
		const { list } = this.props;
		const view = list.map((item) => { return <ListItemBar bar={item} key={item.id} />; });
		return <div>{view}</div>;
	}
}

ListBar.propTypes = {
	list: PropTypes.array.isRequired,
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItemBar extends Component {
	render() {
		const { bar } = this.props;
		return (
			<div className="media">
			  <div className="media-left">
			    <a href="#">
			      <img className="media-object" src={bar.image_url} alt={bar.name} />
			    </a>
			  </div>
			  <div className="media-body">
			    <h4 className="media-heading">{bar.name}</h4>
			  </div>
			</div>
		);
	}
}

ListItemBar.propTypes = {
	bar: PropTypes.object.isRequired,
};
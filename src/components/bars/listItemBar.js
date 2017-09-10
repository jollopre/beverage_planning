import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewRound from '../bar/newRound';
import { BarShape } from '../../shapes/barShape';

export default class ListItemBar extends Component {
	render() {
		const { bar } = this.props;
		return (
			<div className="col-xs-4">
				<div className="thumbnail">
					<Link to={`/bars/${bar.id}`}>
						<img src={bar.image_url} alt={bar.name} />
					</Link>
					<div className="caption">
						<h3>{bar.name}</h3>
						<ul className="list-inline">							
							<li>
								<Link
									to={`/bars/${bar.id}`}
									className="btn btn-default"
									role="button">
									Menu
								</Link>
							</li>
							<li>
								<NewRound barId={bar.id} />
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

ListItemBar.propTypes = {
	bar: BarShape,
};
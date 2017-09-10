import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListBar from '../components/bars/listBar';
import AlertInfo from '../components/alertInfo';

class Bars extends Component {
	render() {
		const { list, filter } = this.props;
		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						<ListBar list={list} />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<AlertInfo show={filter !== null && list.length === 0}>
							<span>
								There are no bars found for term: <strong>
								{filter}</strong>
							</span>
						</AlertInfo>
					</div>
				</div>
			</div>
		);
	}
}

const getVisibleListOfBars = (map, filter) => {
	// filter argument is either coming from the state or from the URL param (e.g. refreshing page)
	const list = Object.keys(map).reduce((acc, id) => {
			return acc.concat([map[id]]);
		}, []);
	if (filter) {
		const a = list.filter(bar => bar.name.includes(filter));
		return a;
	}
	return list;
}

const mapStateToProps = (state, ownProps) => {
	const { bars } = state;
	const { match } = ownProps;
	const filter = bars.filterByName || match.params.filterByName || null;
	return { list: getVisibleListOfBars(bars.byId, filter), filter };
}


export default connect(mapStateToProps)(Bars);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/searchBar';
import ListBar from '../components/listBar';

class Bars extends Component {
	render() {
		const { list } = this.props;
		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						<SearchBar />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<ListBar list={list} />
					</div>
				</div>
			</div>
		);
	}
}

const getVisibleBars = (list, filter) => {
	if (filter) {
		return list.filter(bar => bar.name.includes(filter));
	}
	else {
		return list;
	}
}

const mapStateToProps = state => {
	const { bars } = state;
	return { list: getVisibleBars(bars.list, bars.filterByName) };
}
export default connect(mapStateToProps)(Bars);
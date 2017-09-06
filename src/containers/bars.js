import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/searchBar';
import ListBar from '../components/listBar';

class Bars extends Component {
	render() {
		const { bars } = this.props;
		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						<SearchBar />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<ListBar list={bars} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { bars } = state;
	return { bars };
}
export default connect(mapStateToProps)(Bars);
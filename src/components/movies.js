import React from 'react';
import { connect } from 'react-redux';

import Links from './links';
import { searchText, searchMovies }  from '../actions/actions';
import SearchMovies from './searchMovies';
import TopMovies from './topMovies';

import '../styles/moviesTv.css'

class Movies extends React.Component{
	handleChange = (e) => {
		console.log(this.props);
		let text = e.target.value;
		this.props.searchText(text);
		if(text.length >= 3) {
			this.props.searchMovies(text);
		}
	}

	render() {
		return (
			<div className="container">
				<Links />
				<input className="search" type="text" name="search" value={this.props.search} onChange={this.handleChange} />
				{this.props.search.length < 3 ?
					<TopMovies />
				:
					<SearchMovies />
				}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	search: state.search,
});

export default connect(mapStateToProps, { searchText, searchMovies })(Movies);
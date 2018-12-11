import React from 'react';
import { connect } from 'react-redux';
import { searchText, searchTvShows } from '../actions/actions';

import Links from './links';
import TopTvShows from './topTvShows';
import SearchTvShows from './searchTvShows';

import '../styles/moviesTv.css'

class TvShows extends React.Component{
	handleChange = (e) => {
		//debugger
		let text = e.target.value
		this.props.searchText(text);
		if(text.length >= 3) {
			this.props.searchTvShows(text);
		}
	}

	render() {
		return (
			<div className="container">
				<Links />
				<input className="search" type="text" name="search" value={this.props.search} onChange={this.handleChange} />
				{this.props.search.length < 3 ?
					<TopTvShows />
					: 
					<SearchTvShows />
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	tvShows: state.tvShows,
	search: state.search,
	searchedItems: state.searchedItems,
})

export default connect(mapStateToProps, { searchText, searchTvShows })(TvShows);
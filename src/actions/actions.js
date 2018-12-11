import { instance } from '../axios';

import {
    SAVE_MOVIES,
    SAVE_TV_SHOWS,
	SEARCH,
	SEARCHED_ITEMS,
    START_FETCHING,
    END_FETCHING
} from './actionTypes';

export const startFetching = () => {
	return {
		type: START_FETCHING,
	}
}

export const endFetching = () => {
	return {
		type: END_FETCHING,
	}
}

export const saveMovies = (data) => {
	return {
		type: SAVE_MOVIES,
		payload: data,
	}
}

export const saveTvShows = (data) => {
	return {
		type: SAVE_TV_SHOWS,
		payload: data,
	}
}

export const searchMovieText = (data) => {
	return {
		type: SEARCHED_ITEMS,
		payload: data,
	}
}

export const searchTvShowText = (data) => {
	return {
		type: SEARCHED_ITEMS,
		payload: data,
	}
}

export const searchText = (text) => {
	return {
		type: SEARCH,
		payload: text,
	}
}

export const fetchMovies = () => dispatch => {
	dispatch(startFetching());
    instance.get("movie/top_rated?api_key=3411d7f956e8d250799ea7493036ff03&language=en-US&page=1")
		.then(res => {
			let data = res.data.results.slice(0, 10)
			dispatch(saveMovies(data));
			dispatch(endFetching());
		})
		.catch(err => {
			console.log(err);
		});
}

export const fetchTvShows = () => dispatch => {
	dispatch(startFetching());
	instance.get("tv/top_rated?api_key=3411d7f956e8d250799ea7493036ff03&language=en-US&page=1")
		.then(res => {
			let data = res.data.results.slice(0, 10);
			dispatch(saveTvShows(data));
			dispatch(endFetching());
		})
		.catch(err => {
			console.log(err);
		});
}

export const searchMovies = (text) => dispatch => {
	dispatch(startFetching());
	instance.get(`search/movie?api_key=3411d7f956e8d250799ea7493036ff03&language=en-US&query=${text}&page=1&include_adult=false`)
		.then(res => {
			console.log(res);
			let data = res.data.results.slice(0, 3);
			dispatch(searchMovieText(data));
			dispatch(endFetching());
		})
		.catch(err => {
			console.log(err);
		})
}

export const searchTvShows = (text) => dispatch => {
	dispatch(startFetching());
	instance.get(`search/tv?api_key=3411d7f956e8d250799ea7493036ff03&language=en-US&query=${text}&page=1`)
		.then(res => {
			console.log(res);
			let data = res.data.results.slice(0, 3);
			dispatch(searchTvShowText(data));
			dispatch(endFetching());
		})
		.catch(err => {
			console.log(err);
		})
}
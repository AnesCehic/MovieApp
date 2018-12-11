import {
    SAVE_MOVIES,
    SAVE_TV_SHOWS,
    SEARCH, SEARCHED_ITEMS,
    START_FETCHING,
    END_FETCHING
} from '../actions/actionTypes';

const initialState = {
    movies: [],
    tvShows: [],
    searchedItems: [],
    search: "",
    fetching: false
};

export default function mainReducer(state = initialState, action) {
    switch(action.type) {
        case SAVE_MOVIES:
            return {
                ...state,
                movies: action.payload,
            }
        case SAVE_TV_SHOWS:
            return {
                ...state,
                tvShows: action.payload,
            }
        case SEARCH:
            return {
                ...state,
                search: action.payload,
            }
        case SEARCHED_ITEMS:
            return {
                ...state,
                searchedItems: action.payload,
            }
        case START_FETCHING:
            return {
                ...state,
                fetching: !state.fetching,
            }
        case END_FETCHING:
            return {
                ...state,
                fetching: !state.fetching,
            }
        default:
            return state;
    }
}
/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 22 June, 2016
 * License: MIT
 *
 * Poster Reducer
 */

import { PosterAction } from "../actions/poster";

const initialState = {
    loadTopRatedCompleted: false,
    loadUpcomingCompleted: false,
    loadWatchlistCompleted: false,
    loadSearchResultsCompleted: false,
    topRatedMovies: [],
    upcomingMovies: [],
    watchlistMovies: [],
    searchResults: []
};

const poster = (state = initialState, action) => {
    switch (action.type)
    {
        case PosterAction.GET_TOP_RATED:
            {
                let newState = Object.assign({}, state);
                newState.topRatedMovies = action.movies;
                newState.loadTopRatedCompleted = true;

                return newState;
            }

        case PosterAction.GET_UPCOMING:
            {
                let newState = Object.assign({}, state);
                newState.upcomingMovies = action.movies;
                newState.loadUpcomingCompleted = true;

                return newState;
            }

        case PosterAction.GET_WATCHLIST:
            {
                let newState = Object.assign({}, state);
                newState.watchlistMovies = action.movies;
                newState.loadWatchlistCompleted = true;

                return newState;
            }

        case PosterAction.SEARCH:
            {
                let newState = Object.assign({}, state);
                newState.searchResults = [];
                newState.loadSearchResultsCompleted = false;

                return newState;
            }

        case PosterAction.SEARCH_COMPLETE:
            {
                let newState = Object.assign({}, state);
                newState.searchResults = action.movies;
                newState.loadSearchResultsCompleted = true;

                return newState;
            }

        case PosterAction.ADD_MOVIE_WATCHLIST:
            {
                let newState = Object.assign({}, state);
                newState.movie = action.movie;
                newState.loadWatchlistCompleted = false;

                return newState;
            }

        case PosterAction.REMOVE_MOVIE_WATCHLIST:
            {
                let newState = Object.assign({}, state);
                newState.watchlistMovies = newState.watchlistMovies.filter(function(movie) {
                    return movie.id !== action.movieId;
                });
                newState.loadTopRatedCompleted = false;
                newState.loadUpcomingCompleted = false;

                return newState;
            }

        default:
            return state;
    }
}

export default poster;

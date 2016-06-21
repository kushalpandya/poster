/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 21 June, 2016
 * License: MIT
 *
 * Watchlist Reducer
 */

import { WatchlistAction } from "../actions/watchlist";

const initialState = {
    loadCompleted: false,
    movies: []
};

const watchlist = (state = initialState, action) => {
    switch (action.type)
    {
        case WatchlistAction.ADD_MOVIE:
            {
                let newState = Object.assign({}, state);
                let foundInWatchlist = newState.movies.find((movie) => {
                    return (movie.id === action.movie.id)
                });

                if (!foundInWatchlist)
                {
                    newState.movies.push(action.movie);
                    newState.isInWatchlist = true;
                }

                return newState;
            }

        case WatchlistAction.REMOVE_MOVIE:
            {
                let newState = Object.assign({}, state);
                newState.movies = newState.movies.filter((movie) => {
                    return !(movie.id === action.movieId);
                });

                return newState;
            }

        case WatchlistAction.GET_MOVIES:
            {
                let newState = Object.assign({}, state);
                newState.loadCompleted = true;

                return newState;
            }

        default:
            return state;
    }
}

export default watchlist;

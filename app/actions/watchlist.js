/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 21 June, 2016
 * License: MIT
 *
 * Watchlist Actions
 */

/*
 * Action Types
 */

export const WatchlistAction = {
    GET_MOVIES: 'GET_MOVIES',
    ADD_MOVIE: 'ADD_MOVIE',
    REMOVE_MOVIE: 'REMOVE_MOVIE'
};

/*
 * Action Creators
 */
export const getWatchlist = () => {
    return {
        type: WatchlistAction.GET_MOVIES
    }
}

export const addMovieToWatchlist = (movie) => {
    return {
        type: WatchlistAction.ADD_MOVIE,
        movie
    };
}

export const removeMovieFromWatchlist = (movieId) => {
    return {
        type: WatchlistAction.REMOVE_MOVIE,
        movieId
    };
}

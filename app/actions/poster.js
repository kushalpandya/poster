/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 22 June, 2016
 * License: MIT
 *
 * Poster Actions
 */

import HTTP from "superagent";

const API_URL = "http://localhost:9000/api";

const END_POINTS = {
    GET_TOP_RATED:          '/movie/top_rated',
    GET_UPCOMING:           '/movie/upcoming',
    SEARCH:                 '/movie/search',
    GET_WATCHLIST:          '/watchlist',
    ADD_MOVIE_WATCHLIST:    '/watchlist',
    REMOVE_MOVIE_WATCHLIST: '/watchlist'
};

/*
 * Action Types
 */
export const PosterAction = {
    GET_TOP_RATED:          'GET_TOP_RATED',
    GET_UPCOMING:           'GET_UPCOMING',
    GET_WATCHLIST:          'GET_WATCHLIST',
    SEARCH:                 'SEARCH',
    SEARCH_COMPLETE:        'SEARCH_COMPLETE',
    ADD_MOVIE_WATCHLIST:    'ADD_MOVIE',
    REMOVE_MOVIE_WATCHLIST: 'REMOVE_MOVIE'
};

/*
 * Action Creators
 */
export const getTopRatedMovies = (movies) => {
    return {
        type: PosterAction.GET_TOP_RATED,
        movies
    };
}

export const getUpcomingMovies = (movies) => {
    return {
        type: PosterAction.GET_UPCOMING,
        movies
    };
}

export const getWatchlistMovies = (movies) => {
    return {
        type: PosterAction.GET_WATCHLIST,
        movies
    }
}

export const doSearch = () => {
    return {
        type: PosterAction.SEARCH
    };
}

export const getSearchMovies = (movies) => {
    return {
        type: PosterAction.SEARCH_COMPLETE,
        movies
    };
}

export const addMovieToWatchlist = (movie) => {
    return {
        type: PosterAction.ADD_MOVIE_WATCHLIST,
        movie
    };
}

export const removeMovieFromWatchlist = (movieId) => {
    return {
        type: PosterAction.REMOVE_MOVIE_WATCHLIST,
        movieId
    };
}

/*
 * Async Actions
 */

/**
 * Method to get Movies from Poster Server based on provided type.
 */
export const loadMovies = (type) => {
    return dispatch =>  HTTP.get(`${API_URL}${END_POINTS[type]}`)
                            .end((err, res) => {
                                if (err || !res.ok)
                                    console.log("Something went wrong while getting /api%s! ", END_POINTS[type], err);
                                else
                                {
                                    switch (type)
                                    {
                                        case PosterAction.GET_TOP_RATED:
                                            dispatch(getTopRatedMovies(res.body.results));
                                            break;

                                        case PosterAction.GET_UPCOMING:
                                            dispatch(getUpcomingMovies(res.body.results));
                                            break;

                                        case PosterAction.GET_WATCHLIST:
                                            dispatch(getWatchlistMovies(res.body.results));
                                            break;

                                        default:
                                            break;
                                    }
                                }
                            });
}

export const loadSearch = (query) => {
    return (dispatch) => {
        dispatch(doSearch());
        return  HTTP.get(`${API_URL}${END_POINTS.SEARCH}`)
                    .query({ query: query })
                    .end((err, res) => {
                        if (err || !res.ok)
                            console.log("Something went wrong while getting /api%s! ", END_POINTS.SEARCH, err);
                        else
                            dispatch(getSearchMovies(res.body.results));
                    });
    };
}

/**
 * Method to add movie to Watchlist.
 */
export const addToWatchlist = (movie) => {
    return dispatch =>  HTTP.put(`${API_URL}${END_POINTS.ADD_MOVIE_WATCHLIST}`)
                            .send(movie)
                            .end((err, res) => {
                                if (err || !res.ok)
                                    console.log("Something went wrong while putting at /api%s! ", END_POINTS.ADD_MOVIE_WATCHLIST, err);
                                else
                                {
                                    if (res.body.status === 0 &&
                                        res.body.moviesAdded === 1)
                                        dispatch(addMovieToWatchlist(res.body.movie));
                                }
                            });
}

/**
 * Method to remove movie from Watchlist.
 */
export const removeFromWatchlist = (movieId) => {
    return dispatch =>  HTTP.delete(`${API_URL}${END_POINTS.REMOVE_MOVIE_WATCHLIST}/${movieId}`)
                            .end((err, res) => {
                                if (err || !res.ok)
                                    console.log("Something went wrong while deleting at /api%s! ", END_POINTS.REMOVE_MOVIE_WATCHLIST, err);
                                else
                                {
                                    if (res.body.status === 0 &&
                                        res.body.moviesRemoved === 1)
                                        dispatch(removeMovieFromWatchlist(movieId));
                                }
                            });
}

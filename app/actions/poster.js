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

/*
 * Action Types
 */
export const PosterAction = {
    GET_TOP_RATED: 'GET_TOP_RATED',
    GET_UPCOMING: 'GET_UPCOMING'
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

/*
 * Async Actions
 */
export const loadMovies = (type) => {
    let listType = type === PosterAction.GET_TOP_RATED ? 'top_rated' : 'upcoming';

    return dispatch => HTTP.get(`${API_URL}/movie/${listType}`).end((err, res) => {
        if (err || !res.ok)
            console.log("Something went wrong while loading %s! ", listType, err);
        else
        {
            if (type === PosterAction.GET_TOP_RATED)
                dispatch(getTopRatedMovies(res.body.results));
            else
                dispatch(getUpcomingMovies(res.body.results));
        }
    });
}

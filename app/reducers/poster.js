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
    topRatedMovies: [],
    upcomingMovies: []
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

        default:
            return state;
    }
}

export default poster;

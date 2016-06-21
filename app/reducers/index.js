/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 21 June, 2016
 * License: MIT
 *
 * Root Reducer
 */

import { combineReducers } from "redux";

import watchlistReducer from "./watchlist";

let posterApp = combineReducers({
    watchlist: watchlistReducer
});

export default posterApp;

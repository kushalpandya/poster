/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 21 June, 2016
 * License: MIT
 *
 * Poster Redux Store
 */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import posterApp from "./reducers";

let store = createStore(
    posterApp,
    applyMiddleware(thunk)
);

export default store;

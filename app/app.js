/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 01 June, 2016
 * License: MIT
 *
 * React App Entry-point
 */

/*
 * Library
 */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

/*
 * Page Components
 */
import Home             from "./components/Views/Home";
import SearchResults    from "./components/Views/Section/SearchResults";
import TopRated         from "./components/Views/Section/TopRated/TopRated";
import Upcoming         from "./components/Views/Section/Upcoming/Upcoming";
import Watchlist        from "./components/Views/Section/Watchlist/Watchlist";
import MovieDetail      from "./components/Views/Section/MovieDetail/MovieDetail";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <Route path="search" component={SearchResults}></Route>
            <Route path="top_rated" component={TopRated}></Route>
            <Route path="upcoming" component={Upcoming}></Route>
            <Route path="watchlist" component={Watchlist}></Route>
            <Route path="movie/:movieId" component={MovieDetail}></Route>
        </Route>
    </Router>,
    document.getElementById('poster-app')
);

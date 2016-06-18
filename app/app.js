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
 * Persistent Page Components
 */
import Header from "./components/Views/Header/Header";
import Footer from "./components/Views/Footer/Footer";

/*
 * Dynamic Page Components
 */
import Home from "./components/Views/Section/Home/Home";
import TopRated from "./components/Views/Section/TopRated/TopRated";
import Upcoming from "./components/Views/Section/Upcoming/Upcoming";
import Watchlist from "./components/Views/Section/Watchlist/Watchlist";
import MovieDetail from "./components/Views/Section/Shared/MovieDetail";

import SearchResults from "./components/Views/Section/Home/SearchResults";

export default
class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <section class="container poster-section">
                    <Home/>
                    {this.props.children}
                </section>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="search" component={SearchResults}></Route>
            <Route path="top_rated" component={TopRated}></Route>
            <Route path="upcoming" component={Upcoming}></Route>
            <Route path="watchlist" component={Watchlist}></Route>
            <Route path="movie/:movieId" component={MovieDetail}></Route>
        </Route>
    </Router>,
    document.getElementById('poster-app')
);

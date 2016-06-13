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
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

/*
 * Dynamic Page Components
 */
import Home from "./components/Section/Home/Home";
import TopRated from "./components/Section/TopRated/TopRated";
import Upcoming from "./components/Section/Upcoming/Upcoming";
import Watchlist from "./components/Section/Watchlist/Watchlist";

export default
class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="top_rated" component={TopRated}></Route>
            <Route path="upcoming" component={Upcoming}></Route>
            <Route path="watchlist" component={Watchlist}></Route>
        </Route>
    </Router>,
    document.getElementById('poster-app')
);

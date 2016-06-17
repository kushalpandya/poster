/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 13 June, 2016
 * License: MIT
 *
 * Section > Home
 */

import React from "react";

import SearchBox from "../Shared/SearchBox";

export default
class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section class="container poster-section home-section">
                <div class="jumbotron">
                    <h2>Welcome to Poster!</h2>
                    <p>A minimalist Movies catelog, powered by <a href="https://www.themoviedb.org" target="_blank">TMDb</a>.</p>
                    <SearchBox/>
                </div>
            </section>
        );
    }
}

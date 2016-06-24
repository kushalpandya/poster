/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 13 June, 2016
 * License: MIT
 *
 * Section > Jumbotron
 */

import React from "react";

import LoadingMessage from "../../Widgets/LoadingAnimation";

import SearchBox from "./Shared/SearchBox";
import MovieCardList from "./Shared/MovieCardList";

export default
class Jumbotron extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class={"jumbotron " + (this.props.hide ? 'hidden' : '')}>
                <h2>Welcome to Poster!</h2>
                <p>A minimalist Movies catalog, powered by <a href="https://www.themoviedb.org" target="_blank">TMDb</a>.</p>
                <SearchBox handleSearch={this.props.handleSearch}/>
            </div>
        );
    }
}

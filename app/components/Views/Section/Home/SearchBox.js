/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 13 June, 2016
 * License: MIT
 *
 * Section > Home -> [ SearchBox ]
 */

import React from "react";

export default
class SearchBox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form class="input-group">
                <input type="text" class="form-control" placeholder="Search movies or people..." />
                <span class="input-group-btn">
                    <button class="btn btn-default glyphicon glyphicon-search" type="submit"></button>
                </span>
            </form>
        );
    }
}

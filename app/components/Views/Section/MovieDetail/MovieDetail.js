/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 17 June, 2016
 * License: MIT
 *
 * Section > * -> [ MovieDetail ]
 */

import React from "react";

export default
class MovieDetail extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section class="container poster-section movie-details-section">
                <h1>This is Movie Detail for ID {this.props.params.movieId}</h1>
            </section>
        );
    }
}

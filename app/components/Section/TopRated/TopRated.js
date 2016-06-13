/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 13 June, 2016
 * License: MIT
 *
 * Section > Top Rated
 */

import React from "react";

export default
class TopRated extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <section class="container">
                <h2>This is Top 20!</h2>
            </section>
        );
    }
}

/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 13 June, 2016
 * License: MIT
 *
 * Section > Watchlist
 */

import React from "react";
import HTTP from "superagent";

import LoadingAnimation from "../../../Widgets/LoadingAnimation";

export default
class Watchlist extends React.Component {
    constructor() {
        super();
        this.state = {
            loadCompleted: false
        };
    }

    render() {
        return (
            <section class="container poster-section watchlist-section">
                <LoadingAnimation
                    visible={!this.state.loadCompleted}
                    loadMessage="Loading your watchlist..."
                />
            </section>
        );
    }
}

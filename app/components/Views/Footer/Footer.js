/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 01 June, 2016
 * License: MIT
 *
 * Footer Parent Container
 */

import React from "react";

export default
class Footer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <footer class="poster-footer">
                <div class="container">
                    <p class="pull-left">Designed and built by <a href="https://doublslash.com" target="_blank">@kushalpandya</a></p>
                    <p class="pull-right">Source available on <a href="https://github.com/kushalpandya/poster" target="_blank">GitHub</a></p>
                </div>
            </footer>
        );
    }
}

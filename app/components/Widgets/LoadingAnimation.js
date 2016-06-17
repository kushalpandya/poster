/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 14 June, 2016
 * License: MIT
 *
 * Section > * -> [ LoadingMessage ]
 */

import React from "react";

export default
class LoadingMessage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class={"loading-message " + (this.props.visible ? "" : "hidden")}>
                <img src="assets/images/hourglass.svg"/>
                <h5 class="text-muted">{this.props.loadMessage}</h5>
            </div>
        );
    }
}

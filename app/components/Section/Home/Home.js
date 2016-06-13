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

export default
class Home extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        console.log("from Home", this);
        return (
            <section class="container">
                <h2>This is Homepage!</h2>
            </section>
        );
    }
}

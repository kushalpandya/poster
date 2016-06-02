/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 02 June, 2016
 * License: MIT
 *
 * Header Parent Container
 */

import React from "react";

import Nav from "./Nav/Nav";

export default
class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header>
                <Nav/>
            </header>
        );
    }
}

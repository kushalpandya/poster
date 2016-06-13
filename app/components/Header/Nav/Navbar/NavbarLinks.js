/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 02 June, 2016
 * License: MIT
 *
 * Navbar Links Container
 */

import React from "react";

import NavbarLinkItem from "./NavbarLinkItem";

export default
class NavbarLinks extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul class="nav navbar-nav">
                <NavbarLinkItem linkTitle="Top 20" linkPath="top_rated"/>
                <NavbarLinkItem linkTitle="Upcoming Movies" linkPath="upcoming"/>
                <NavbarLinkItem linkTitle="Watchlist" linkPath="watchlist"/>
            </ul>
        );
    }
}

/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 02 June, 2016
 * License: MIT
 *
 * Navbar Brand Component
 */

import React from "react";
import { IndexLink } from "react-router";

export default
class NavbarBrand extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <IndexLink class="navbar-brand" to="/">Poster</IndexLink>
        );
    }
}

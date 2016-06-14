/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 02 June, 2016
 * License: MIT
 *
 * Navbar Header Container
 */

import React from "react";

import NavbarToggle from "./NavbarToggle";
import NavbarBrand from "./NavbarBrand";

export default
class NavbarHeader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="navbar-header">
                <NavbarToggle toggleCollapse={this.props.toggleCollapse}/>
                <NavbarBrand/>
            </div>
        );
    }
}

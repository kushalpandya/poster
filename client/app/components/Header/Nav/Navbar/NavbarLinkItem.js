/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 02 June, 2016
 * License: MIT
 *
 * Navbar Link Item Component
 */

import React from "react";

export default
class NavbarLinkItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li>
                <a href="#">{this.props.linkTitle}</a>
            </li>
        );
    }
}

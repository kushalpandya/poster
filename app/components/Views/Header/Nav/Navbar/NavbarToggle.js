/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 02 June, 2016
 * License: MIT
 *
 * Navbar Toggle Component
 */

import React from "react";

export default
class NavbarToggle extends React.Component {
    constructor() {
        super();

        this.state = {
            collapse: true
        };
    }

    handleOnClick() {
        this.props.toggleCollapse(!this.state.collapse);
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        return (
            <button
                    aria-expanded="false"
                    class="navbar-toggle collapsed"
                    data-target="#bs-example-navbar-collapse-1"
                    data-toggle="collapse"
                    type="button"
                    onClick={this.handleOnClick.bind(this)}>
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        );
    }
}

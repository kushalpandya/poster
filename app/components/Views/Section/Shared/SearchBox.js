/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 13 June, 2016
 * License: MIT
 *
 * Section > Home -> [ SearchBox ]
 */

import React from "react";

export default
class SearchBox extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            value: ''
        };
    }

    handleKeyUp(e) {
        if (e.which === 13 &&
            this.state.value)
            this.props.handleSearch(this.state.value);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleClick(e) {
        if (this.state.value)
            this.props.handleSearch(this.state.value);
    }

    render() {
        return (
            <div class="input-group">
                <input
                        type="text"
                        placeholder="Search for a movie..."
                        class="form-control"
                        value={this.state.value}
                        onKeyUp={this.handleKeyUp}
                        onChange={this.handleChange}
                />
                <span class="input-group-btn">
                    <button
                        class="btn btn-default glyphicon glyphicon-search"
                        type="button"
                        onClick={this.handleClick}
                    >
                    </button>
                </span>
            </div>
        );
    }
}

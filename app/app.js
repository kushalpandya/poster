/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 01 June, 2016
 * License: MIT
 *
 * React App Entry-point
 */

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <h1>Hello from React!</h1>
        );
    }
}

const appEl = document.getElementById('poster-app');

ReactDOM.render(<App/>, appEl);

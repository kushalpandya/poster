/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 02 June, 2016
 * License: MIT
 *
 * Navigation Parent Container
 */

import React from "react";

import NavbarHeader from "./Navbar/NavbarHeader";
import NavbarLinks from "./Navbar/NavbarLinks";

export default
class Nav extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container-fluid">
                    <img
                         class="pull-left"
                         height="50px"
                         src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIGhlaWdodD0iNjRweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNjRweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgZmlsbD0iIzc3QjNENCIgcj0iMzIiLz48Y2lyY2xlIGN4PSIzMiIgY3k9IjMzLjkxNyIgZmlsbD0iIzIzMUYyMCIgb3BhY2l0eT0iMC4yIiByPSIxMy4wODMiLz48Y2lyY2xlIGN4PSIzMiIgY3k9IjMzLjA4MyIgZmlsbD0iIzRGNUQ3MyIgcj0iMTMuMDgzIi8+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgZmlsbD0iIzRGNUQ3MyIgcj0iMTMuMDgzIi8+PGcgb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzIsMTJjLTEyLjE1LDAtMjIsOS44NS0yMiwyMnM5Ljg1LDIyLDIyLDIyYzEyLjE1LDAsMjItOS44NSwyMi0yMlM0NC4xNSwxMiwzMiwxMnogTTE0LjUsMzAuNSAgIGMwLTMuMDM4LDIuNDYyLTUuNSw1LjUtNS41YzMuMDM3LDAsNS41LDIuNDYyLDUuNSw1LjVjMCwzLjAzNy0yLjQ2Myw1LjUtNS41LDUuNUMxNi45NjIsMzYsMTQuNSwzMy41MzcsMTQuNSwzMC41eiBNMjQuNDY5LDQ5LjUgICBjLTMuMDM4LDAtNS41LTIuNDYzLTUuNS01LjVjMC0zLjAzOCwyLjQ2Mi01LjUsNS41LTUuNWMzLjAzOCwwLDUuNSwyLjQ2Miw1LjUsNS41QzI5Ljk2OSw0Ny4wMzcsMjcuNTA2LDQ5LjUsMjQuNDY5LDQ5LjV6ICAgIE0yNi41LDIxLjVjMC0zLjAzOCwyLjQ2Mi01LjUsNS41LTUuNWMzLjAzNywwLDUuNSwyLjQ2Miw1LjUsNS41YzAsMy4wMzgtMi40NjMsNS41LTUuNSw1LjVDMjguOTYyLDI3LDI2LjUsMjQuNTM4LDI2LjUsMjEuNXogICAgTTM5LjQ2OSw0OS41Yy0zLjAzOCwwLTUuNS0yLjQ2My01LjUtNS41YzAtMy4wMzgsMi40NjItNS41LDUuNS01LjVjMy4wMzgsMCw1LjUsMi40NjIsNS41LDUuNSAgIEM0NC45NjksNDcuMDM3LDQyLjUwNiw0OS41LDM5LjQ2OSw0OS41eiBNNDQuMDQyLDM2Yy0zLjAzOCwwLTUuNS0yLjQ2My01LjUtNS41YzAtMy4wMzgsMi40NjItNS41LDUuNS01LjUgICBjMy4wMzcsMCw1LjUsMi40NjIsNS41LDUuNUM0OS41NDIsMzMuNTM3LDQ3LjA3OSwzNiw0NC4wNDIsMzZ6IiBmaWxsPSIjMjMxRjIwIi8+PC9nPjxnPjxwYXRoIGQ9Ik0zMiwxMGMtMTIuMTUsMC0yMiw5Ljg1LTIyLDIyczkuODUsMjIsMjIsMjJjMTIuMTUsMCwyMi05Ljg1LDIyLTIyUzQ0LjE1LDEwLDMyLDEweiBNMTQuNSwyOC41ICAgYzAtMy4wMzgsMi40NjItNS41LDUuNS01LjVjMy4wMzcsMCw1LjUsMi40NjIsNS41LDUuNWMwLDMuMDM4LTIuNDYzLDUuNS01LjUsNS41QzE2Ljk2MiwzNCwxNC41LDMxLjUzOCwxNC41LDI4LjV6IE0yNC40NjksNDcuNSAgIGMtMy4wMzgsMC01LjUtMi40NjMtNS41LTUuNWMwLTMuMDM4LDIuNDYyLTUuNSw1LjUtNS41YzMuMDM4LDAsNS41LDIuNDYyLDUuNSw1LjVDMjkuOTY5LDQ1LjAzNywyNy41MDYsNDcuNSwyNC40NjksNDcuNXogICAgTTI2LjUsMTkuNWMwLTMuMDM4LDIuNDYyLTUuNSw1LjUtNS41YzMuMDM3LDAsNS41LDIuNDYyLDUuNSw1LjVjMCwzLjAzOC0yLjQ2Myw1LjUtNS41LDUuNUMyOC45NjIsMjUsMjYuNSwyMi41MzgsMjYuNSwxOS41eiAgICBNMzkuNDY5LDQ3LjVjLTMuMDM4LDAtNS41LTIuNDYzLTUuNS01LjVjMC0zLjAzOCwyLjQ2Mi01LjUsNS41LTUuNWMzLjAzOCwwLDUuNSwyLjQ2Miw1LjUsNS41ICAgQzQ0Ljk2OSw0NS4wMzcsNDIuNTA2LDQ3LjUsMzkuNDY5LDQ3LjV6IE00NC4wNDIsMzRjLTMuMDM4LDAtNS41LTIuNDYyLTUuNS01LjVjMC0zLjAzOCwyLjQ2Mi01LjUsNS41LTUuNSAgIGMzLjAzNywwLDUuNSwyLjQ2Miw1LjUsNS41QzQ5LjU0MiwzMS41MzgsNDcuMDc5LDM0LDQ0LjA0MiwzNHoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9zdmc+"
                         style={{
                             marginTop: '7px',
                             paddingRight: '10px'
                         }}
                    />
                    <NavbarHeader/>
                    <div class="collapse navbar-collapse">
                        <NavbarLinks/>
                    </div>
                </div>
            </nav>
        );
    }
}

/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 01 June, 2016
 * License: MIT
 *
 * React App Main Layout Component
 */

import React from "react";

import Header from "./Header/Header";
import Jumbotron from "./Section/Jumbotron";
import Footer from "./Footer/Footer";

export default
class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <section class="container poster-section">
                    <Jumbotron/>
                    {this.props.children}
                </section>
                <Footer/>
            </div>
        );
    }
}

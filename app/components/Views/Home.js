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
import { connect } from "react-redux";

import { PosterAction, loadSearch } from "../../actions/poster";

import Header from "./Header/Header";
import Jumbotron from "./Section/Jumbotron";
import Footer from "./Footer/Footer";

class Home extends React.Component {
    constructor() {
        super();
    }

    handleSearch(query) {
        this.context.router.push({
            pathname: 'search',
            query: {
                query: query
            }
        });

        this.props.loadSearch(query);
    }

    render() {
        let routeChildren = this.props.children;
        const currentChild = (routeChildren && routeChildren.type.WrapperComponent) || '';
        if (currentChild.name === 'SearchResults')
        {
            routeChildren = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
                loadCompleted: this.props.loadCompleted,
                movies: this.props.movies
            }));
        }

        return (
            <div>
                <Header/>
                <section class="container poster-section">
                    <Jumbotron
                        hide={this.props.params.movieId ? true : false}
                        handleSearch={this.handleSearch.bind(this)}
                    />
                    {routeChildren}
                </section>
                <Footer/>
            </div>
        );
    }
}

/*
 * Declare Context Properties
 */
Home.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const stateToProps = (state, ownProps) => {
    return {
        loadCompleted: state.poster.loadSearchResultsCompleted,
        movies: state.poster.searchResults
    };
}

const dispatchToProps = (dispatch, ownProps) => {
    return {
        loadSearch: (query) => {
            return dispatch(loadSearch(query));
        }
    };
}

const HomeView = connect(
    stateToProps,
    dispatchToProps
)(Home);

export default HomeView;

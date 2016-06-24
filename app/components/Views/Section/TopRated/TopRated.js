/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 13 June, 2016
 * License: MIT
 *
 * Section > Top Rated
 */

import React from "react";
import { connect } from "react-redux";

import { PosterAction, loadMovies } from "../../../../actions/poster";

import LoadingAnimation from "../../../Widgets/LoadingAnimation";

import MovieCardList from "../Shared/MovieCardList";
import MovieCard from "../Shared/MovieCard";

class TopRated extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        if (!this.props.loadCompleted)
            this.request = this.props.loadTopRated();
    }

    componentWillUnmount() {
        if (!this.props.loadCompleted)
            this.request.abort();
    }

    render() {
        return (
            <div class="container top-rated-section">
                <LoadingAnimation
                    visible={!this.props.loadCompleted}
                    loadMessage="Loading top rated movies..."
                />
                <MovieCardList
                    movies={this.props.movies}
                    cardAction="ADD"
                    visible={this.props.loadCompleted}
                />
            </div>
        );
    }
}

const stateToProps = (state, ownProps) => {
    return {
        loadCompleted: state.poster.loadTopRatedCompleted,
        movies: state.poster.topRatedMovies
    };
}

const dispatchToProps = (dispatch, ownProps) => {
    return {
        loadTopRated: () => {
            return dispatch(loadMovies(PosterAction.GET_TOP_RATED));
        }
    };
}

const TopRatedView = connect(
    stateToProps,
    dispatchToProps
)(TopRated);

export default TopRatedView;

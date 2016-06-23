/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 13 June, 2016
 * License: MIT
 *
 * Section > Watchlist
 */

import React from "react";
import { connect } from "react-redux";

import { PosterAction, loadMovies } from "../../../../actions/poster";

import LoadingAnimation from "../../../Widgets/LoadingAnimation";
import MovieCardList from "../Shared/MovieCardList";
import MovieCard from "../Shared/MovieCard";

class Watchlist extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        if (!this.props.loadCompleted)
            this.request = this.props.loadWatchlist();
    }

    componentWillUnmount() {
        if (!this.props.loadCompleted)
            this.request.abort();
    }

    render() {
        return (
            <div class="container watchlist-section">
                <LoadingAnimation
                    visible={!this.props.loadCompleted}
                    loadMessage="Loading your watchlist..."
                />
                <MovieCardList
                    movies={this.props.movies}
                    cardAction="REMOVE"
                    visible={this.props.loadCompleted}
                />
            </div>
        );
    }
}

const stateToProps = (state, ownProps) => {
    return {
        loadCompleted: state.poster.loadWatchlistCompleted,
        movies: state.poster.watchlistMovies
    };
}

const dispatchToProps = (dispatch, ownProps) => {
    return {
        loadWatchlist: () => {
            return dispatch(loadMovies(PosterAction.GET_WATCHLIST));
        }
    };
}

const WatchlistView = connect(
    stateToProps,
    dispatchToProps
)(Watchlist);

export default WatchlistView;

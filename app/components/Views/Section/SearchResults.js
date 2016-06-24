/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 18 June, 2016
 * License: MIT
 *
 * Section > Home > Search Results
 */

import React from "react";
import { connect } from "react-redux";

import { PosterAction, loadSearch } from "../../../actions/poster";

import LoadingMessage from "../../Widgets/LoadingAnimation";

import MovieCardList from "./Shared/MovieCardList";

class SearchResults extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        const { query } = this.props.location.query;

        if (!this.props.loadCompleted)
            this.props.loadSearch(query);
    }

    render() {
        const { query } = this.props.location.query;
        const loadMessage = `Searching for "${query}"...`;

        return (
            <div class="container search-results">
                <LoadingMessage
                    visible={!this.props.loadCompleted}
                    loadMessage={loadMessage}
                />
                <MovieCardList
                    visible={this.props.loadCompleted}
                    movies={this.props.movies}
                />
        </div>
        );
    }
}

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

const SearchResultsView = connect(
    stateToProps,
    dispatchToProps
)(SearchResults);

export default SearchResultsView;

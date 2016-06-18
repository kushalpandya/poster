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
import HTTP from "superagent";

import LoadingMessage from "../../../Widgets/LoadingAnimation";

import MovieCardList from "../Shared/MovieCardList";

export default
class SearchResults extends React.Component {
    baseURL = "http://localhost:9000/api";

    constructor() {
        super();
        this.state = {
            searchActive: true,
            showSearchResults: false,
            movies: []
        };
    }

    componentWillMount() {
        const { query } = this.props.location.query;

        this.setState({
            searchActive: true,
            showSearchResults: false
        });

        this.request = HTTP
                        .get(`${this.baseURL}/movie/search`)
                        .query({ query: query })
                        .end((err, res) => {
                            if (err || !res.ok)
                                console.log("Something went wrong", err);
                            else
                            {
                                this.setState({
                                    searchActive: false,
                                    showSearchResults: true,
                                    movies: res.body.results
                                });
                            }
                        });
    }

    componentWillUnmount() {
        this.request.abort();
    }

    render() {
        const { query } = this.props.location.query;
        const loadMessage = `Searching for "${query}"...`;

        return (
            <div class="container search-results">
                <LoadingMessage
                    visible={this.state.searchActive}
                    loadMessage={loadMessage}
                />
                <MovieCardList
                    visible={this.state.showSearchResults}
                    movies={this.state.movies}
                />
        </div>
        );
    }
}

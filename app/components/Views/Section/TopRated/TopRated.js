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
import HTTP from "superagent";

import LoadingAnimation from "../../../Widgets/LoadingAnimation";

import MovieCardList from "../Shared/MovieCardList";
import MovieCard from "../Shared/MovieCard";

export default
class TopRated extends React.Component {
    baseURL = "http://localhost:9000/api";

    constructor() {
        super();
        this.state = {
            movies: [],
            loadCompleted: false
        }
    }

    componentWillMount() {
        this.request = HTTP.get(`${this.baseURL}/movie/top_rated`).end((err, res) => {
            if (err || !res.ok)
                console.log("Something went wrong", err);
            else
            {
                this.setState({
                    loadCompleted: true,
                    movies: res.body.results
                })
            }
        });
    }

    componentWillUnmount() {
        this.request.abort();
    }

    render() {
        return (
            <div class="container top-rated-section">
                <LoadingAnimation
                    visible={!this.state.loadCompleted}
                    loadMessage="Loading top rated movies..."
                />
                <MovieCardList
                    movies={this.state.movies}
                    cardAction="ADD"
                    visible={this.state.loadCompleted}
                />
            </div>
        );
    }
}

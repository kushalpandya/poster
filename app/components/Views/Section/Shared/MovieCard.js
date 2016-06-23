/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 15 June, 2016
 * License: MIT
 *
 * Section > * -> [ MovieCard ]
 */

import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import { addToWatchlist, removeFromWatchlist } from "../../../../actions/poster";

import ActionButton from "../../../Widgets/ActionButton";

class MovieCard extends React.Component {
    noPosterImage = "dist/assets/images/no_poster.png";

    months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    constructor() {
        super();
    }

    render() {
        const movie = this.props.movie;
        const moviePermaLink = `/movie/${movie.id}`;

        const titleLength = movie.title.length;
        const truncatedTitle = (titleLength > 33) ? movie.title.substr(0, 28) + '...' : movie.title;

        const releaseDate = new Date(movie.release_date);
        const releaseDateString = `${releaseDate.getDate()} ${this.months[releaseDate.getMonth()]}, ${releaseDate.getUTCFullYear()}`;

        const bannerColor = {
            backgroundColor: movie.backdrop_color
        };

        movie.watchlist = movie.watchlist || this.props.watchlisted;

        return (
            <div class="movie-item">
                <div class="movie-banner">
                    <div class="movie-backdrop" style={ bannerColor }>
                        {(() => {
                            if (movie.backdrop_path.small)
                                return (
                                    <img src={movie.backdrop_path.small}/>
                                );
                        })()}
                    </div>
                    <Link to={moviePermaLink}>
                        <img class="movie-poster" src={movie.poster_path.smaller || this.noPosterImage}/>
                    </Link>
                    <Link to={moviePermaLink} class="rating hint--top" aria-label={movie.vote_count + ' Votes'}>
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                        <span class="rate-value" aria-label="Rating">{movie.vote_average}</span>
                    </Link>
                </div>
                <div class="movie-meta">
                    <Link to={moviePermaLink} class="title">
                        <h4
                            class={"title-text " + (titleLength > 33 ? "hint--bottom" : "")}
                            aria-label={movie.title}
                        >
                            {truncatedTitle}
                        </h4>
                    </Link>
                    <div class="release-date text-muted">
                        <span class="glyphicon glyphicon-calendar"></span> {releaseDateString}
                    </div>
                    <hr/>
                    <p class="overview">{movie.overview}</p>
                    <div class="card-actions">
                        <ActionButton
                            visible={this.props.action === 'ADD' && !movie.watchlist}
                            actionHint="Add to watchlist"
                            actionGlyph="add"
                            handleClick={this.props.handleAddToWatchlist}
                        />
                        <ActionButton
                            visible={this.props.action !== 'REMOVE' && movie.watchlist}
                            actionHint="Added to watchlist"
                            actionGlyph="added"
                        />
                        <ActionButton
                            visible={this.props.action === 'REMOVE' && movie.watchlist}
                            actionHint="Remove from watchlist"
                            actionGlyph="remove"
                            handleClick={this.props.handleRemoveFromWatchlist}
                        />
                        <Link to={moviePermaLink} class="more-info">
                            <span>Explore</span> <em>&#10095;</em>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const stateToProps = (state, ownProps) => {
    let isWatchlisted;

    if (state.poster.movie)
    {
        if (state.poster.movie.id === ownProps.movie.id)
            isWatchlisted = state.poster.movie.watchlist;
        else
            isWatchlisted = ownProps.movie.watchlist;
    }
    else
        isWatchlisted = ownProps.movie.watchlist;

    return {
        watchlisted: isWatchlisted
    };
}

const dispatchToProps = (dispatch, ownProps) => {
    return {
        handleAddToWatchlist: () => {
            dispatch(addToWatchlist(ownProps.movie));
        },

        handleRemoveFromWatchlist: () => {
            dispatch(removeFromWatchlist(ownProps.movie.id));
        }
    };
}

const MovieCardView = connect(
    stateToProps,
    dispatchToProps
)(MovieCard);

export default MovieCardView;

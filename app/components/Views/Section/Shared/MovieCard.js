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

export default
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

    truncateTitle(title) {
        let truncatedTitle;

        if (title.length > 33)
        return
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
                        <img class="movie-poster" src={movie.poster_path.small || this.noPosterImage}/>
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
                        <span class="add-watchlist hint--bottom" aria-label="Add to watchlist">
                            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                        </span>
                        <Link to={moviePermaLink} class="more-info">
                            <span>Explore</span> <em>&#10095;</em>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

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

    constructor() {
        super();
    }

    render() {
        const movie = this.props.movie;
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
                    <img class="movie-poster" src={movie.poster_path.small || this.noPosterImage}/>
                </div>
                <div class="movie-meta">
                    <Link to={`/movie/${movie.id}`}>
                        <h4 class="title">{movie.title}</h4>
                    </Link>
                    <hr/>
                    <div class="genre-list">
                        {/*{
                            movie.genre_ids.map((genre) => {
                                return (
                                    <span class="genre" key={genre}>{genre}</span>
                                );
                            })
                        }*/}
                    </div>
                    <p class="overview">{movie.overview}</p>
                    <div class="rating">{movie.vote_average}</div>
                    <div class="release-date">{movie.release_date}</div>
                </div>
            </div>
        );
    }
}

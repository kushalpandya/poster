/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 13 June, 2016
 * License: MIT
 *
 * Section >  * > [ Movie Cards List ]
 */

import React from "react";

import MovieCard from "../Shared/MovieCard";

export default
class MovieCardList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class={"movies-list " + (this.props.visible ? '' : 'hidden')}>
                {
                    this.props.movies.map((movie, i) => {
                        return (
                            <MovieCard key={movie.id} movie={movie} />
                        );
                    })
                }
            </div>
        );
    }
}

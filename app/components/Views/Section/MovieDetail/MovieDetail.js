/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 17 June, 2016
 * License: MIT
 *
 * Section > MovieDetail
 */

import React from "react";
import HTTP from "superagent";

import LoadingAnimation from "../../../Widgets/LoadingAnimation";

export default
class MovieDetail extends React.Component {
    baseURL = "http://localhost:9000/api";
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
        this.state = {
            movie: {},
            loadCompleted: false
        }
    }

    componentWillMount() {
        const { movieId } = this.props.params;

        this.request = HTTP.get(`${this.baseURL}/movie/info/${movieId}`).end((err, res) => {
            if (err || !res.ok)
                console.log("Something went wrong", err);
            else
            {
                this.setState({
                    loadCompleted: true,
                    movie: res.body
                })
            }
        });
    }

    componentWillUnmount() {
        this.request.abort();
    }

    renderCrewItem(person, i, arr) {
        const personPermaLink = "https://www.themoviedb.org/person/";

        return (
            <span key={person.id}>
                <a href={`${personPermaLink}${person.id}`} target="_blank">{person.name}</a>{i < arr.length - 1 ? ', ' : ''}
            </span>
        );
    }

    renderCastItem(person) {
        const personPermaLink = "https://www.themoviedb.org/person/";

        return (
            <div class="cast-person">
                <span class="person-photo">
                    <img src={person.profile_path.smaller}/>
                </span>
                <span class="person-title">
                    <a href={`${personPermaLink}${person.id}`} class="person-name" target="_blank">{person.name}</a>
                    <div class="person-char">as <i>{person.character}</i></div>
                </span>
            </div>
        );
    }

    render() {
        const { movie } = this.state;
        const { credits } = movie;
        const crewPermaLink = `https://www.themoviedb.org/movie/${movie.id}/cast`;
        const releaseDate = new Date(movie.release_date);
        const releaseDateString = `${releaseDate.getDate()} ${this.months[releaseDate.getMonth()]}, ${releaseDate.getUTCFullYear()}`;


        return (
            <section class="container poster-section movie-details-section">
                <LoadingAnimation
                    visible={!this.state.loadCompleted}
                    loadMessage="Loading movie details..."
                />
                {(() => {
                    if (this.state.loadCompleted)
                        return (
                            <div class={"row " + (this.state.loadCompleted ? "" : "hidden")}>
                                <div class="col-md-3 sidebar">
                                    <img class="movie-poster" src={movie.poster_path.small || this.noPosterImage}/>
                                    <br/>
                                    <table class="table stats-table">
                                        <tbody>
                                            <tr>
                                                <th>Rating</th>
                                                <td>
                                                    <span class="label label-warning hint--top rating" aria-label={movie.vote_count + ' Votes'}>{movie.vote_average}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Released</th><td>{releaseDateString}</td>
                                            </tr>
                                            <tr>
                                                <th>Running time</th><td>{movie.runtime} minutes</td>
                                            </tr>
                                            <tr>
                                                <th>Budget</th><td>${movie.budget}</td>
                                            </tr>
                                            <tr>
                                                <th>Revenue</th><td>${movie.revenue}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-md-9 contents">
                                    <div class="movie-title">
                                        <h2 class="title-text">{movie.title}</h2>
                                        <h5 class="release-year text-muted">({releaseDate.getUTCFullYear()})</h5>
                                    </div>
                                    <hr/>
                                    <div class="movie-synopsis">
                                        <h6>Overview</h6>
                                        <p>{movie.overview}</p>
                                        <br/>
                                        <h6>Tagline</h6>
                                        <p>{movie.tagline}</p>
                                        <br/>
                                        <h6>Genres</h6>
                                        <p class="movie-genres">
                                            {
                                                movie.genres.map(function(genre, i) {
                                                    return (
                                                        <span class="label label-success" key={genre.id}>{genre.name}</span>
                                                    );
                                                })
                                            }
                                        </p>
                                        <br/>
                                        <h6>Crew</h6>
                                        <table class="table crew-table">
                                            <tbody>
                                                <tr>
                                                    <th>Director{credits.directors.length > 1 ? 's' : ''}:</th>
                                                    <td>{credits.directors.map(this.renderCrewItem)}</td>
                                                </tr>
                                                <tr>
                                                    <th>Writer{credits.writers.length > 1 ? 's' : ''}:</th>
                                                    <td>{credits.writers.map(this.renderCrewItem)}</td>
                                                </tr>
                                                <tr>
                                                    <th>Producer{credits.producers.length > 1 ? 's' : ''}:</th>
                                                    <td>{credits.producers.map(this.renderCrewItem)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a href={crewPermaLink} target="_blank">Show all &rarr;</a>
                                        <br/>
                                        <br/>
                                        <h6>Actors</h6>
                                        <table class="table cast-table">
                                            <tbody>
                                                <tr>
                                                    <td>{this.renderCastItem(credits.actors[0])}</td>
                                                    <td>{this.renderCastItem(credits.actors[1])}</td>
                                                </tr>
                                                <tr>
                                                    <td>{this.renderCastItem(credits.actors[2])}</td>
                                                    <td>{this.renderCastItem(credits.actors[3])}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a href={crewPermaLink + '#cast'} target="_blank">Show all &rarr;</a>
                                        <br/>
                                        <br/>
                                        <h6>Production Company</h6>
                                        <p>
                                            {
                                                movie.production_companies.map(function(company, i, arr) {
                                                    return (
                                                        <a href={`https://www.themoviedb.org/company/${company.id}`} target="_blank" key={company.id}>{company.name}{i < arr.length - 1 ? ', ' : ''}</a>
                                                    )
                                                })
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                })()}
            </section>
        );
    }
}

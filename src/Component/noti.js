import React, { Component } from "react";
import { parse, isAfter, format } from 'date-fns';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import * as icons from 'react-icons/fa';
import './noti.css';
import { connect } from "react-redux";
import { INCREMENT } from "../redux/Action";
class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favFilms: [],
            films: [],
            FilmDetails: [],
            upcomingReleases: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
    };

    handleStorageChange = (event) => {
        let favFilms = this.props.favFilmsSharedState ? this.props.favFilmsSharedState : [];

        this.setState({
            favFilms: favFilms
        })
        axios.get('./filmList.json')
            .then((response) => {
                let dataFilms = response.data;
                axios.get('./filmDetails.json')
                    .then((response) => {
                        let dataFilmDetails = response.data;
                        let favFilmsArr = [];


                        let dataFilmDetailsFav = [];

                        favFilms.forEach((favId) => {
                            dataFilmDetails.forEach(filmDetail => {
                                if (favId === filmDetail.film_id) {
                                    dataFilmDetailsFav.push(filmDetail);
                                }
                            });
                            dataFilms.forEach(film => {
                                if (favId === film.ID) {
                                    favFilmsArr.push(film);
                                }
                            });
                        });

                        let lstFilmDetailWithFilm = [];

                        favFilmsArr.forEach((favFilm, indexFilm) => {
                            dataFilmDetailsFav.forEach(filmDetail => {
                                // check xem co order khong
                                if (filmDetail.order) {
                                    if (filmDetail.film_id === favFilm.ID) {
                                        lstFilmDetailWithFilm[indexFilm] = {
                                            film: favFilm,
                                            filmDetail: filmDetail
                                        }
                                    }
                                }
                            });
                        });

                        let lstRealReleaseMessages = [];
                        lstFilmDetailWithFilm.forEach(item => {
                            const published_date = item.filmDetail.published_date;
                            const parsedDate = parse(published_date, 'dd/MM/yyyy', new Date());

                            // So sánh với ngày hiện tại

                            if (isAfter(parsedDate, new Date())) {
                                const releaseMessage = `${item.film.Name} ${item.filmDetail.Name} will be published on ${item.filmDetail.published_date}.`;
                                lstRealReleaseMessages.push(releaseMessage)
                            }
                        });
                        this.setState({ upcomingReleases: lstRealReleaseMessages })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
    }

    componentDidMount = () => {

        window.addEventListener('storage', this.handleStorageChange);
        let favFilms = localStorage.getItem('fav_films') ? JSON.parse(localStorage.getItem('fav_films')) : [];
        console.log(favFilms, 'favFilms');

        // let favFilms = this.props.favFilmsSharedState ? this.props.favFilmsSharedState : [];
        this.setState({
            favFilms: favFilms
        })
       
        axios.get('./filmList.json')
            .then((response) => {
                let dataFilms = response.data;
                axios.get('./filmDetails.json')
                    .then((response) => {
                        let dataFilmDetails = response.data;
                        let favFilmsArr = [];
                        let dataFilmDetailsFav = [];

                        favFilms.forEach((favId) => {
                            dataFilmDetails.forEach(filmDetail => {
                                if (favId === filmDetail.film_id) {
                                    dataFilmDetailsFav.push(filmDetail);
                                }
                            });
                            dataFilms.forEach(film => {
                                if (favId === film.ID) {
                                    favFilmsArr.push(film);
                                }
                            });
                        });

                        let lstFilmDetailWithFilm = [];

                        favFilmsArr.forEach((favFilm, indexFilm) => {
                            dataFilmDetailsFav.forEach(filmDetail => {
                                // check xem co order khong
                                if (filmDetail.order) {
                                    if (filmDetail.film_id === favFilm.ID) {
                                        lstFilmDetailWithFilm[indexFilm] = {
                                            film: favFilm,
                                            filmDetail: filmDetail
                                        }
                                    }
                                }
                            });
                        });
                        let lstRealReleaseMessages = [];
                        lstFilmDetailWithFilm.forEach(item => {
                            const published_date = item.filmDetail.published_date;
                            const parsedDate = parse(published_date, 'dd/MM/yyyy', new Date());
                            // So sánh với ngày hiện tại
                            if (isAfter(parsedDate, new Date())) {
                                const releaseMessage = `${item.film.Name} ${item.filmDetail.Name} will be published on ${item.filmDetail.published_date}.`;
                                lstRealReleaseMessages.push( {message: releaseMessage, film_id: item.filmDetail.ID})

                            }
                        });
                        this.setState({upcomingReleases: lstRealReleaseMessages})
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
    }

    render() {
        const { upcomingReleases } = this.state;
        return (
            <ul className="rounded noti-menu">

                {this.props.count}

                {/*{upcomingReleases.map((message, index) => (*/}
                {/*    <li key={index}>{message.message}</li>*/}
                {/*))}*/}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state
    };
};

const mapDispatchToProps = {
    INCREMENT
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification) ;
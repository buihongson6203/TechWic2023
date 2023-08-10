import React, { Component } from "react";
import { parse, isAfter, format } from 'date-fns';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import * as icons from 'react-icons/fa';

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

    componentDidUpdate(prevProps, nextProps) {
        console.log(prevProps)
        console.log(nextProps)
    };

    componentDidMount = () => {
        let favFilms = localStorage.getItem('fav_films') ? JSON.parse(localStorage.getItem('fav_films')) : [];
        this.setState({
            favFilms: favFilms
        })
        axios.get('./filmList.json')
            .then((response) => {
                let dataFilms = response.data;
                // console.log(dataFilms);
                axios.get('./filmDetails.json')
                    .then((response) => {
                        let dataFilmDetails = response.data;
                        let favFilmsArr = [];
                        console.log(dataFilmDetails);
                        console.log(favFilms);


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



                        // console.log(dataFilmDetailsFav);
                        // console.log(favFilmsArr);

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

                        console.log(lstFilmDetailWithFilm);
                        lstFilmDetailWithFilm.forEach(item => {
                            const published_date = item.filmDetail.published_date;
                            const parsedDate = parse(published_date, 'dd/MM/yyyy', new Date());

                            // So sánh với ngày hiện tại
                            if (isAfter(parsedDate, new Date())) {
                                const releaseMessage = `${item.film.Name} ${item.filmDetail.Name} will be published on ${item.filmDetail.published_date}.`;
                                this.setState(prevState => ({
                                    upcomingReleases: [...prevState.upcomingReleases, releaseMessage]
                                }));
                            }
                        });
                        // dataFilmDetailsFav.forEach(filmDetail => {
                        //     // check xem co order khong
                        //     if(filmDetail.order){
                        //         console.log(filmDetail);
                        //     }
                        // });




                        // dataFilmDetailsFav.forEach(filmDetail => {
                        //     let count = 0;
                        //     favFilmsArr.forEach(film => {
                        //         // check xem co order khong
                        //         if(filmDetail.order){
                        //             // console.log(filmDetail);
                        //             if(filmDetail.film_id === film.ID) {
                        //                 count++;
                        //                 // console.log(film);
                        //                 // console.log(count);
                        //                 if(count === dataFilmDetailsFav.length) {
                        //                     console.log(filmDetail);
                        //                 }
                        //             }
                        //         }
                        //         // lay phim
                        //         //this.setState({films:film});
                        //     })
                        // });
                        // let dataFilmDetails = response.data;
                        // let fimDetailsNoti = [];
                        // this.setState({FilmDetails: dataFilmDetails});
                        // let numberOfEpisodes = 0;
                        // dataFilms.forEach(film => {
                        //     let filmDetail = null;

                        //     dataFilmDetails.forEach(item => {
                        //         if (item.film_id === film.ID) numberOfEpisodes++;
                        //         filmDetail = item; 
                        //     });
                        //     film.numberOfEpisodes = numberOfEpisodes;
                        //     console.log(   film.numberOfEpisodes);
                        //     if(film.numberOfEpisodes > 1){
                        //         console.log(filmDetail);
                        //         fimDetailsNoti.push(filmDetail);
                        //     }
                        //    numberOfEpisodes = 0;
                        // });
                        // const filteredFilms = dataFilms.filter(film => favFilms.includes(film.ID));

                        // this.setState({ films: filteredFilms });
                        // this.setState({fimDetailsNoti: fimDetailsNoti});
                        // let currentDate = new Date();
                        // console.log(dataFilms);
                        // console.log(format(currentDate, 'dd-MM-yyyy'));
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
    }

    render() {
        const { upcomingReleases } = this.state;
        return (
            <div>
                <ul>
                    {upcomingReleases.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Notification;
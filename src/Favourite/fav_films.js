import React, { Component } from "react";
import axios from 'axios';
import "./fav_films.css";
import * as icons from 'react-icons/fa';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { DECREMENT, INCREMENT } from "../redux/Action";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

class FavFilms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favFilms: [],
            films: [],
            relatedFilms: []
        };
    }

    componentDidMount() {
        const favFilms = JSON.parse(localStorage.getItem('fav_films')) || [];
        this.setState({ favFilms: favFilms });

        axios.get('./filmList.json')
            .then((response) => {
                let dataFilms = response.data;

                axios.get('./filmDetails.json')
                    .then((response) => {
                        let dataFilmDetails = response.data;
                        dataFilms.forEach(film => {
                            let numberOfEpisodes = 0;
                            dataFilmDetails.forEach(item => {
                                if (item.film_id === film.ID) numberOfEpisodes++;
                            });
                            film.numberOfEpisodes = numberOfEpisodes;
                        });
                        const filteredFilms = dataFilms.filter(film => favFilms.includes(film.ID));
                        const uniqueCateIdsSet = new Set(filteredFilms.map(film => film.cate_id));
                        const uniqueCateIdsArray = Array.from(uniqueCateIdsSet);
                        const relatedMovies = dataFilms.filter(film => uniqueCateIdsArray.includes(film.cate_id));

                        this.setState({
                            films: filteredFilms,
                            relatedFilms: relatedMovies
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
    }
    componentDidUpdate() {
        console.log(this.state);
    }
    handleRemoveFavFilm = (ID) => {
        const updatedFavFilms = this.state.favFilms.filter((film) => film !== ID);
        this.setState({ favFilms: updatedFavFilms }, () => {
            let FilmsUpdate = this.state.films.filter(film => this.state.favFilms.includes(film.ID));
            this.setState({ films: FilmsUpdate });
        });
        console.log(updatedFavFilms);
        this.props.setSharedFavFilmsState(updatedFavFilms);
        window.dispatchEvent(new Event('storage'))
        localStorage.setItem('fav_films', JSON.stringify(updatedFavFilms));
        this.handleDecrement(ID)
    };

    handleDecrement(data) {
        this.props.DECREMENT(data);
    }


    render() {
        const { films, relatedFilms } = this.state;

        return (
            <div className="container-film">
                <h1 className="favfilm">Favourite Films</h1>
                <div className="wrapper-film">
                    {films.map((item) => {
                        return (
                            <Link to={`/detail/${item.ID}`} className="link-film" key={item.ID}>
                                <div key={item.ID} className="item-film">
                                    <div className="title">{item.numberOfEpisodes} episodes</div>
                                    <img className="logo" src={'./imgs/film/' + item.image} alt={item.Name} />
                                    <div className="name">{item.Name}</div>
                                    <button className="position-absolute heart-item active" onClick={() => this.handleRemoveFavFilm(item.ID)}>
                                        <icons.FaHeart />
                                    </button>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div className="">
                    <h4 className="text-white mb-3">related Films</h4>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}

                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                // spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                // spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                // spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {relatedFilms.map((item) => {
                            return (
                                <SwiperSlide key={item.ID} className="item-film">
                                    <div className="item-inner poisiton-relative">
                                        <div className="tap">{item.numberOfEpisodes} episodes</div>
                                        <Link to={`/detail/${item.ID}`} className="item-link">
                                            <img className="logo-slider" src={'./imgs/film/' + item.image} alt={item.Name} />
                                        </Link>
                                        <div className="name">{item.Name} <strong className="red">({item.streamingProvider})</strong></div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

            </div>
        );
    }
}
export default connect(null, { DECREMENT })(FavFilms)

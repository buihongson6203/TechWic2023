import React, { Component } from "react";
import axios from 'axios';
import "./fav_films.css";
import * as icons from 'react-icons/fa';
class FavFilms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favFilms: [],
            films: [],
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

                        this.setState({ films: filteredFilms });
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
    };

    render() {
        const { films } = this.state;

        return (
            <div className="container-film">
                <h1 className="favfilm">Favourite Films</h1>
                <div className="wrapper-film">
                    {films.map((item) => {
                        return (
                            <div key={item.ID} className="item-film">
                                <div className="title">{item.numberOfEpisodes} episodes</div>
                                <img className="logo" src={'./imgs/film/' + item.image} alt={item.Name} />
                                <div className="name">{item.Name}</div>
                                <button className="position-absolute heart-item active" onClick={() => this.handleRemoveFavFilm(item.ID)}>
                                    <icons.FaHeart />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default FavFilms;

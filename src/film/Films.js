import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';

import * as icons from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Autoplay } from 'swiper/modules';
import './Films.css';

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByLetter: 'alphabetical',
      cateSearch: 0,
      categories: [],
      films: [],
      search: '',
      fav_film: []
    }
  }
  

  handleCateSearchChange = (event) => {
    let { value } = event.target;
    this.setState({
      cateSearch: parseInt(value)
    });
  }

  handleSortTypeChange = (event) => {
    let { value } = event.target;
    this.setState({
      sortByLetter: value
    });
  }

  filterFilms = () => {
    const { films, cateSearch, search, sortByLetter } = this.state;
    //IF NOT SEARCH OR FILTER, RETURNS ALL THE FILMS
    // if (search === '') {
    //   return films;
    // }

    let filteredMovies = films.filter(movie =>
      (cateSearch === 0 || movie.cate_id === cateSearch) &&
      movie.Name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortByLetter === 'alphabetical') {
      filteredMovies.sort((a, b) => a.Name.localeCompare(b.Name));
    } else {
      filteredMovies.sort((a, b) => b.Name.localeCompare(a.Name));
    }

    return filteredMovies;
  };

  componentDidMount = () => {
    let fav_films = localStorage.getItem('fav_films') ? JSON.parse(localStorage.getItem('fav_films')) : [];
    this.setState({
      fav_film: fav_films
    })
    // get categories
    axios.get('./categories.json')
      .then((response) => {
        let dataCategories = response.data;
        this.setState({ categories: dataCategories });
      })
      .catch((error) => {
        console.log(error);
      });

    // get film and numberOfEpisodes film
    axios.get('./filmList.json')
      .then((response) => {
        let dataFilms = response.data;

        axios.get('./filmDetails.json')
          .then((response) => {
            let dataFilmDetails = response.data;
            dataFilms.forEach(film => {
              let numberOfEpisodes = 0;
              dataFilmDetails.forEach(filmDetail => {
                if (filmDetail.film_id === film.ID) numberOfEpisodes++;
              });
              film.numberOfEpisodes = numberOfEpisodes;
            });

            this.setState({ films: dataFilms });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate = () => {
    // console.log(this.state.fav_film)
  }

  handleSearch = (event) => {
    if (event.key === 'Enter') {
      const { value } = event.target;
      this.setState({ search: value });
    }
  }

  HandleFavourite = (ID) => {
    let fav_films = this.state.fav_film;
    const index = fav_films.indexOf(ID);
    if (index > -1) {
      fav_films.splice(index, 1);
    } else {
      fav_films.push(ID);
    }
    this.props.setSharedFavFilmsState(fav_films);
  
    this.setState({
      fav_film: fav_films
    });
    window.dispatchEvent( new Event('storage') )
    localStorage.setItem('fav_films', JSON.stringify(fav_films))

  }


  render() {
    const filteredMovies = this.filterFilms();

    return (
      <div className="container-film">
        
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
          breakpoints={{
            450:{
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {filteredMovies.map((item) => {
            let active = this.state.fav_film.includes(item.ID) ? 'active' : '';

            return (
              <SwiperSlide key={item.ID} className="item-film">
                <div className="episodes">{item.numberOfEpisodes} episodes</div>
                <Link to="/detail" className="item-link">
                  <img className="logo" src={'./imgs/film/' + item.image} alt={item.Name} />
                </Link>
                <div className="title">{item.Name}</div>
                <button className={` heart-item ${active}`} onClick={() => this.HandleFavourite(item.ID)}>
                  {active === '' ? <icons.FaRegHeart /> : <icons.FaHeart />}
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
}
export default Films;
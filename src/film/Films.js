import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import "./Films.css";
import * as icons from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {Autoplay } from 'swiper/modules';

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
        <div className="row wrapper-seclect">
          <div className="col-6 row">
            <div className="col-6">
              <select className="form-control" id="movie-type" onChange={this.handleCateSearchChange}>
                <option value="0">genres</option>
                {this.state.categories.map(category => (
                  <option key={category.ID} value={category.ID}>{category.Name}</option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <select className="form-control" id="movie-type" onChange={this.handleSortTypeChange}>
                <option value="alphabetical">A-Z</option>
                <option value="not alphabetical">Z-A</option>
              </select>
            </div>
          </div>
          <div className="col-6 input-search">
            <input className="form-control input1" type="text" placeholder="Search film..." onKeyDown={this.handleSearch} />
            <icons.FaSearch className="search"/>
          </div>
        </div>
        <div className="wrapper-film">
          {filteredMovies.map((item) => {
            let active = this.state.fav_film.includes(item.ID) ? 'active' : '';

            return (
              <div key={item.ID} className="item-film">
                <div className="title">{item.numberOfEpisodes} episodes</div>
                <Link to={`/detail/${item.ID}`} className="item-link" >
                  <img className="logo" src={'./imgs/film/' + item.image} alt={item.Name} />
                </Link>
                <div className="name">{item.Name}</div>
                <button className={`position-absolute heart-item ${active}`} onClick={() => this.HandleFavourite(item.ID)}>
                  {active === '' ? <icons.FaRegHeart /> : <icons.FaHeart />}
                </button>
              </div>
            );
          })}
        </div>
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
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {filteredMovies.map((item) => {
            let active = this.state.fav_film.includes(item.ID) ? 'active' : '';

            return (
              <SwiperSlide key={item.ID} className="item-film">
                <div>{item.numberOfEpisodes} episodes</div>
                <Link to="/detail" className="item-link">
                  <img className="logo" src={'./imgs/film/' + item.image} alt={item.Name} />
                </Link>
                <div className="name">{item.Name}</div>
                <button className={`position-absolute heart-item ${active}`} onClick={() => this.HandleFavourite(item.ID)}>
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
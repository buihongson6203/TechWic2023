import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import "./Films.css";
import * as icons from 'react-icons/fa';
import { isAfter, parse } from "date-fns";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { INCREMENT , GET, DECREMENT} from "../redux/Action";
import { connect } from "react-redux";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper/modules';

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByLetter: 'alphabetical',
      cateSearch: 0,
      categories: [],
      films: [],
      search: '',
      fav_film: [],
      favFilms: [],
      FilmDetails: [],
      upcomingReleases: [],
      noti_data: []
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

  notify = (message) => toast(message);


  handleStorageChange = () => {
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
                // lstRealReleaseMessages.push(releaseMessage)
                this.notify(releaseMessage)
              }
            });
            this.setState({ upcomingReleases: lstRealReleaseMessages })
          })
          .catch((error) => {
            console.log(error);
          });
      })
  }

  handleIncrement(data) {
    this.props.INCREMENT(data);
  }

  handleDecrement(data) {
    this.props.DECREMENT(data);
  }


  HandleFavourite = (ID) => {

    let fav_films = this.state.fav_film;
    let noti_data = localStorage.getItem('noti_data') ? JSON.parse(localStorage.getItem('noti_data')) : [];
    const index = fav_films.indexOf(ID);
    if (index > -1) {
      fav_films.splice(index, 1);
      const ud = noti_data.filter((item) => item.film.ID !== ID)

      console.log(noti_data, ID , ud, 'alo')
      localStorage.setItem('noti_data', JSON.stringify(ud))

      this.handleDecrement(ID)
    } else {
      fav_films.push(ID);
    }
    this.props.setSharedFavFilmsState(fav_films);

    this.setState({
      fav_film: fav_films
    });
    window.dispatchEvent( new Event('storage') )
    localStorage.setItem('fav_films', JSON.stringify(fav_films))

      let favFilms = fav_films ?  fav_films : [];

    this.setState({
      favFilms: fav_films
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
                  let releaseMessage = ''

                const chossenFilm = lstFilmDetailWithFilm.filter(item => item.film.ID == ID)[0];
                  const published_date = chossenFilm.filmDetail.published_date;
                  const parsedDate = parse(published_date, 'dd/MM/yyyy', new Date());
                  if (isAfter(parsedDate, new Date())) {
                      const releaseMessage = `${chossenFilm.film.Name} ${chossenFilm.filmDetail.Name} will be published on ${chossenFilm.filmDetail.published_date}.`;
                      this.notify(releaseMessage)
                    let dataUpadate = {message: releaseMessage, filmDetail: chossenFilm.filmDetail, film : chossenFilm.film}
                    this.handleIncrement(dataUpadate)
                  }

                let lstRealReleaseMessages = [];
                lstFilmDetailWithFilm.forEach(item => {
                  const published_date = item.filmDetail.published_date;
                  const parsedDate = parse(published_date, 'dd/MM/yyyy', new Date());

                  // So sánh với ngày hiện tại
                  if (isAfter(parsedDate, new Date())) {
                    const releaseMessage = `${item.film.Name} ${item.filmDetail.Name} will be published on ${item.filmDetail.published_date}.`;
                    let dataUpadate = {message: releaseMessage, filmDetail: item.filmDetail, film : item.film}
                    lstRealReleaseMessages.push(dataUpadate);
                  }
                });
                this.setState({upcomingReleases: lstRealReleaseMessages})
                localStorage.setItem('noti_data', JSON.stringify(lstRealReleaseMessages))

              })
              .catch((error) => {
                console.log(error);
              });
        })

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
            <icons.FaSearch className="search" />
          </div>
        </div>
        <div className="wrapper-film-1">
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
                  <div className="item-inner poisiton-relative">
                  {item.numberOfEpisodes === 0 ? (
  <div className="tap">Individual</div>
) : (
  <div className="tap">{item.numberOfEpisodes} episodes</div>
)}

                    <Link to={`/detail/${item.ID}`} className="item-link">
                      <img className="logo-slider" src={'./imgs/film/' + item.image} alt={item.Name} />
                    </Link>
                    <div className="name">{item.Name} <strong className="red">({item.streamingProvider})</strong></div>
                    <button className={`position-absolute heart-itemm ${active}`} onClick={() => this.HandleFavourite(item.ID)}>
                      {active === '' ? <icons.FaRegHeart /> : <icons.FaHeart />}
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover
          theme="light"
        />
      </div>
    );
  }
}
export default connect(null, { INCREMENT, GET, DECREMENT })(Films) ;
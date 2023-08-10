import React, { Component } from "react";
import axios from 'axios';
import "./Films.css";
class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByLetter: 'alphabetical',
      cateSearch: 0,
      categories: [],
      films: [],
      search: ''
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
            // console.log(dataFilms);
            // console.log(dataFilmDetails);
            dataFilms.forEach(film => {
              let numberOfEpisodes = 0;
              dataFilmDetails.forEach(item => {
                if (item.film_id === film.ID) numberOfEpisodes++;
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
    // console.log(this.state);
  }

  handleSearch = (event) => {
    if (event.key === 'Enter') {
      const { value } = event.target;
      this.setState({ search: value });
    }
  }


  render() {
    const filteredMovies = this.filterFilms();

    return (
      <div className="container-film">
        <div className="row wrapper-seclect">
          <div className="col-6 row">
            <div className="col-6">
              <select className="form-control" id="movie-type" onChange={this.handleCateSearchChange}>
                <option value="0">All</option>
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
          <div className="col-6">
            <input className="form-control input" type="text" placeholder="Search film..." onKeyPress={this.handleSearch} onChange={this.handleSearch} />
          </div>
        </div>
        <div className="wrapper-film">
          {filteredMovies.map((item) => (
            <div key={item.ID} className="item-film">
              <div className="title">{item.numberOfEpisodes} episodes</div>
              <img className="logo" src={'./imgs/film/' + item.image} alt={item.Name} />
              <div className="name">{item.Name}</div>
              <div className="position-absolute heart-item">0</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Films;

import React, { Component } from "react";
import axios from 'axios';
import "./Films.css";
class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cateSearch: 0,
      categories: [],
      films: [],
    }
  }

  handleCateSearchChange = (event) => {
    let { value } = event.target;
    this.setState({
      cateSearch: parseInt(value)
    });
  }

  filterMoviesByCategory = () => {
    const { films, cateSearch } = this.state;
    if (cateSearch === 0) {
      return films; // Không có giá trị tìm kiếm, trả về toàn bộ danh sách phim
    }
    
    // Lọc danh sách phim theo giá trị cateSearch
    const filteredMovies = films.filter(movie =>
      movie.cate_id === cateSearch
    );
    
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
    console.log(this.state);
  }
  
  // const films = [
  //   {
  //     id: 1,
  //     title: "Tập 16 vietsub",
  //     image:
  //       "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Alienoid_Cuoc_chien_xuyen_khong_72143fde54.jpg",
  //     name: "Cuộc chiến xuyên không",
  //   },
  //   {
  //     id: 2,
  //     title: "Tập 14 vietsub",
  //     image:
  //       "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Sat_thu_doi_dau_086fc7854a.jpg",
  //     name: "Sát thủ đối đầu",
  //   },
  //   {
  //     id: 3,
  //     title: "Tập 24 vietsub",
  //     image:
  //       "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Lien_minh_sieu_thu_DC_2726e64fb3.jpg",
  //     name: "Liên mInh siêu thú",
  //   },
  //   {
  //     id: 4,
  //     title: "Tập 16 vietsub",
  //     image:
  //       "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Dieu_uoc_cuoi_cua_tu_nhan_2037_c80b96b25c.jpg",
  //     name: "Điều ước của tù nhân",
  //   },
  //   {
  //     id: 5,
  //     title: "Tập 10 vietsub",
  //     image:
  //       "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Dan_choi_khong_so_con_roi_dafbfa57b6.jpg",
  //     name: "Dân chơi không sợ con rơi",
  //   },
  //   {
  //     id: 6,
  //     title: "Tập 16 vietsub",
  //     image:
  //       "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Chuyen_ma_giang_duong_hoc_ky_2_279956df2c.jpg",
  //     name: "Chuyện ma giảng đường",
  //   },
  //   {
  //     id: 7,
  //     title: "Tập 12 vietsub",
  //     image:
  //       "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Tham_tu_lung_danh_conan_nang_dau_halloween_062c584d70.jpg",
  //     name: "Conan",
  //   },
  //   {
  //     id: 8,
  //     title: "Tập 16 vietsub",
  //     image:
  //       "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Alienoid_Cuoc_chien_xuyen_khong_72143fde54.jpg",
  //     name: "Cuộc chiến xuyên không",
  //   },
  //   {
  //     id: 9,
  //     title: "Tập 14 vietsub",
  //     image:
  //       "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Sat_thu_doi_dau_086fc7854a.jpg",
  //     name: "Sát thủ đối đầu",
  //   },
  // ];
  render() {
    const filteredMovies = this.filterMoviesByCategory();

    return (
      <div className="container-film">
        <div className="wrapper-seclect">
          <div>
            <select className="form-control" id="movie-type" onChange={this.handleCateSearchChange}>
              <option value="0">All</option>
              {this.state.categories.map(category => (
                <option key={category.ID} value={category.ID}>{category.Name}</option>
              ))}
            </select>
          </div>
          <div>
            <select className="form-control" id="movie-type">
              <option value="0">A-Z</option>
              <option value="1">a-z</option>
            </select>
          </div>
          <input className="form-control input" type="text" placeholder="Search film..." />
        </div>

        <div>
          <div className="wrapper-film">
            {filteredMovies.map((item) => (
              <div className="item-film" key={item.ID}>
                <div className="title">{item.numberOfEpisodes} episodes</div>
                <img className="logo" src={'./imgs/film/' + item.image} alt={item.Name} />
                <div className="name">{item.Name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Films;

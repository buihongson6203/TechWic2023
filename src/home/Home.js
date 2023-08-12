import React, { useState, useEffect } from "react";
import "./Home.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper/modules';
import axios from "axios";
function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get("/filmList.json")
      .then((response) => {
        setFilms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching film list:", error);
      });
  }, []);

  const newFilms = films.filter((item) => item.status === "new");
  const hotFilms = films.filter((item) => item.status === "Hot");
  const upcomingFilms = films.filter((item) => item.status === "upcoming");

  return (

    <div className="container-home">
      <h1 className="home">Home</h1>
      <div>
        <div className="phim-hot">Hot Movies</div>
        <Swiper
          slidesPerView={1}
          // spaceBetween={10}
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
          {hotFilms.map((item) => {


            return (
              <SwiperSlide key={item.ID} className="item-film">
                <div className="item-inner">
                  <Link to={`/detail/${item.ID}`}>
                    <div className="logo-wrap">
                      <img className="logo-slider hvr-grow" src={"./imgs/film/" + item.image} alt={item.Name} />
                    </div>
                    <div className="name">{item.Name} <strong className="red">({item.streamingProvider})</strong></div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>
        <div className="phim-hot">New Movie Update</div>
        <Swiper
          slidesPerView={1}
          // spaceBetween={10}
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
          {newFilms.map((item) => {


            return (
              <SwiperSlide key={item.ID} className="item-film">
                <div className="item-inner">
                  <Link to={`/detail/${item.ID}`}>
                    <div className="logo-wrap">
                      <img className="logo-slider hvr-grow" src={"./imgs/film/" + item.image} alt={item.Name} />
                    </div>
                    <div className="name">{item.Name} <strong className="red">({item.streamingProvider})</strong></div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>
        <div className="phim-hot">Upcoming Movies</div>
        <Swiper
          slidesPerView={1}
          // spaceBetween={10}
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
          {upcomingFilms.map((item) => {


            return (
              <SwiperSlide key={item.ID} className="item-film">
                <div className="item-inner">
                  <Link to={`/detail/${item.ID}`}>
                    <div className="logo-wrap">
                      <img className="logo-slider hvr-grow" src={"./imgs/film/" + item.image} alt={item.Name} />
                    </div>
                    <div className="name">{item.Name} <strong className="red">({item.streamingProvider})</strong></div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
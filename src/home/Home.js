import React, { useState, useEffect } from "react";
import "./Home.css";

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
        {/* <div className="wrapper-film">
          {hotFilms.map((item) => (
            <div className="item-film" key={item.ID}>
              <div className="title">{item.episode} episode</div>
              <img className="logo" src={"./imgs/film/" + item.image} alt={item.Name} />
              <div className="name">{item.Name}</div>
            </div>
          ))}
        </div> */}
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
                  {/* <div className="title">{item.Name}</div> */}
                  <div className="logo-wrap">
                    <img className="logo-slider" src={"./imgs/film/" + item.image} alt={item.Name} />
                  </div>
                  <div className="name">{item.Name} <strong className="red">({item.streamingProvider})</strong></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>
        <div className="phim-hot">New Movie Update</div>
        {/* <div className="wrapper-film">
          {newFilms.map((item) => (
            <div className="item-film" key={item.ID}>
              <div className="title">{item.episode} episode</div>
              <img className="logo" src={"./imgs/film/" + item.image} alt={item.Name} />
              <div className="title">{item.Name}</div>
              <img className="logo-slider" src={"./imgs/film/" + item.image} alt={item.Name} />
              <div className="name">{item.Name}</div>
            </div>
          ))}
        </div> */}
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
                  {/* <div className="title">{item.Name}</div> */}
                  <div className="logo-wrap">
                    <img className="logo-slider" src={"./imgs/film/" + item.image} alt={item.Name} />
                  </div>
                  <div className="name">{item.Name} <strong className="red">({item.streamingProvider})</strong></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>
        <div className="phim-hot">Upcoming Movies</div>
        {/* <div className="wrapper-film">
          {upcomingFilms.map((item) => (
            <div className="item-film" key={item.ID}>
              <div className="title">{item.Name}</div>
              <img className="logo-slider" src={"./imgs/film/" + item.image} alt={item.Name} />
              <div className="name">{item.Name}</div>
            </div>
          ))}
        </div> */}
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
                  {/* <div className="title">{item.Name}</div> */}
                  <div className="logo-wrap">
                    <img className="logo-slider" src={"./imgs/film/" + item.image} alt={item.Name} />
                  </div>
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

export default Home;
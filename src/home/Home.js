import React, { useState, useEffect } from "react";
import "./Home.css";
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
      <div>
        <div className="phim-hot">Hot Movies</div>
        <div className="wrapper-film">
          {hotFilms.map((item) => (
            <div className="item-film" key={item.ID}>
              <div className="title">{item.Name}</div>
              <img className="logo" src={"./imgs/film/" + item.image} alt={item.Name} />
              <div className="name">{item.Name}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="phim-hot">New Movie Update</div>
        <div className="wrapper-film">
          {newFilms.map((item) => (
            <div className="item-film" key={item.ID}>
              <div className="title">{item.Name}</div>
              <img className="logo" src={"./imgs/film/" + item.image} alt={item.Name} />
              <div className="name">{item.Name}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="phim-hot">Upcoming Movies</div>
        <div className="wrapper-film">
          {upcomingFilms.map((item) => (
            <div className="item-film" key={item.ID}>
              <div className="title">{item.Name}</div>
              <img className="logo" src={"./imgs/film/" + item.image} alt={item.Name} />
              <div className="name">{item.Name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

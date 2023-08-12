import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./DetailFilm.css";
import { FaPlay } from 'react-icons/fa';
import { useParams } from 'react-router';

function DetailFilm(props) {
  const { id } = useParams(); // Get the 'id' from route parameters
  const [filmList, setFilmDetails] = useState([]);
  const [category, setCategoryDetails] = useState({});

  console.log(id);

  useEffect(() => {
    axios.get('http://localhost:3000/filmList.json')
      .then((response) => {
        console.log(id);
        console.log(response.data)
        const foundFilmList = response.data.find(detail => detail.ID === parseInt(id));
        if (foundFilmList) {
          setFilmDetails([foundFilmList]);
          axios.get('http://localhost:3000/categories.json')
            .then((response) => {
              const foundCategory = response.data.find(category => category.ID === parseInt(foundFilmList.cate_id));
              if (foundCategory) {
                setCategoryDetails(foundCategory);
              }
              console.log(foundCategory);
            })
            .catch((err) => {
              console.log(err);
            });

        }
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id]);

  if (filmList.length === 0) {
    return <div>No film details available.</div>;
  }

  const plan = filmList[0]; // Get the first element

  console.log(filmList);

  return (
    <div className="container-detail">
      <div className="detail" key={plan.ID}>
        <div className="image">
          <img
            src={'../imgs/film/' + plan.image}
            alt={plan.Name}
            className="img-big"
          />
        </div>
      </div>
      <div>
        <div className="name-film">{plan.Name}</div>
        <div className="review">
          <div>Category: <strong> {category ? category.Name : 'No Category Found'}</strong></div>
        </div>
        <div className="review">
          <div>Streaming Provider:<strong className='red'> {plan.streamingProvider}</strong></div>
        </div>
        <div className="decripsion">
          {plan.Description}
        </div>

        <div className="Episodes">
          <button type="button"> 2</button>
          <button type="button"> 3</button>
          <button type="button"> 4</button>
          <button type="button"> 5</button>
          <button type="button"> 6</button>
          <button type="button"> 7</button>
        </div>
        <div className="watch">
          <input className="fa-play" type="submit" value="watch now" />
        </div>
      </div>
    </div>
  );
}

export default DetailFilm;

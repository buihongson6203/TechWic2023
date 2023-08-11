// import logo from './logo.svg';
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import About from "./About";
import Films from "./film/Films";
import Home from "./home/Home";
import SiteMap from "./SiteMap";
import Contact from "./Contact/Contact";
import Feedback from "./FeedBack/FeedBack";
import PriceList from "./PriceList/PriceList";
import DetailFilm from "./detail/DetailFilm";
import Providers from "./Providers/Providers";
import FavFilms from "./Favourite/fav_films";
import Notification from "./Component/noti";
import * as icons from 'react-icons/fa';
import './Component/noti.css';

function App() {

  const favFilms = JSON.parse(localStorage.getItem("fav_films"));
  const [favFilmsSharedState, setSharedFavFilmsState] = useState(favFilms);
  
  const updateFavFilmsState = (newFavFilms) => {
    // Update the shared state and trigger re-renders
    console.log(newFavFilms);
    setSharedFavFilmsState(newFavFilms);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
         {/* need to update */}
         <div className="position-relative" id="notification">
          <icons.FaBell/>
          <Notification favFilmsSharedState={favFilmsSharedState}/>
        </div> 
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* That update */}
            <Route exact path="/films" element={<Films setSharedFavFilmsState={setSharedFavFilmsState} />} />
            <Route exact path="/feedback" element={<Feedback />} />     
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/sitemap" element={<SiteMap />} />
            <Route exact path="/PriceList" element={<PriceList />} />
            <Route exact path="/detail" element={<DetailFilm />} />
            <Route exact path="/fav" element={<FavFilms setSharedFavFilmsState={setSharedFavFilmsState} />} />
            <Route exact path="/providers" element={<Providers />} />
          </Routes>
          
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;

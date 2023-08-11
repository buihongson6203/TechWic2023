// import logo from './logo.svg';
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import About from "./About";
import Films from "./film/Films";
import Home from "./home/Home";
import SiteMap from "./SiteMap/SiteMap";
import Contact from "./Contact/Contact";
import Feedback from "./FeedBack/FeedBack";
import PriceList from "./PriceList/PriceList";
import DetailFilm from "./detail/DetailFilm";
import Providers from "./Providers/Providers";
import FavFilms from "./Favourite/fav_films";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/films" element={<Films />} />
            <Route exact path="/feedback" element={<Feedback />} />     
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/sitemap" element={<SiteMap />} />
            <Route exact path="/PriceList" element={<PriceList />} />
            <Route exact path="/detail" element={<DetailFilm />} />
            <Route exact path="/fav" element={<FavFilms />} />
            <Route exact path="/providers" element={<Providers />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;

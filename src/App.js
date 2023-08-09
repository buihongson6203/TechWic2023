// import logo from './logo.svg';
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./About";
import Films from "./Films";
import Home from "./Home1";
import SiteMap from "./SiteMap";
import Contact from "./Contact/Contact";
import Feedback from "./FeedBack/FeedBack";


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

          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;

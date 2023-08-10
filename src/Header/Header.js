
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Header.css"
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="header">

      <div className="container-logo">
        <Link to="/" className="item-link">
          <img className="logo" src="/imgs/logo.jpeg" />
        </Link>
        <div className="logo-text">StreamEase</div>
      </div>

      <i onClick={toggleMenu} className="fa-solid fa-bars"></i>
      <ul className={`link ${isMenuOpen ? "open-menu" : "close-menu"}`}>
        <i onClick={closeMenu} className="fa-solid fa-x"></i>
        <li>
          <Link to="/" className="item-link" onClick={closeMenu}>
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link to="/films" className="item-link" onClick={closeMenu}>
            <div>Films</div>
          </Link>
        </li>
        <li>
          <Link to="/feedback" className="item-link" onClick={closeMenu}>
            <div>Feedback</div>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="item-link" onClick={closeMenu}>
            <div>Contact</div>
          </Link>
        </li>
        <li>
          <Link to="/sitemap" className="item-link">
            <div>SiteMap</div>
          </Link>
        </li>
        <li>
          <Link to="/PriceList" className="item-link">
            <div>PriceList</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

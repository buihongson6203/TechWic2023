
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import "./Header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <div className="container-logo">
            <img className="logo" src="/imgs/logo.jpeg" alt="Logo" />
            <div className="logo-text">StreamEase</div>
          </div>
          <div
            className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/films" className="nav-link" onClick={closeMobileMenu}>
                Films
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/feedback" className="nav-link" onClick={closeMobileMenu}>
                Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sitemap" className="nav-link" onClick={closeMobileMenu}>
                SiteMap
              </Link>
            </li>
          </ul>
        </nav>
      </header>
=======
import { useState } from "react";
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
      <Link to="/" className="item-link">
        <div className="container-logo">
          <img className="logo" src="/imgs/logo.jpeg" />
          <div className="logo-text">StreamEase</div>
        </div>
      </Link>

      <i onClick={toggleMenu} class="fa-solid fa-bars"></i>
      <ul className={`link ${isMenuOpen ? "open-menu" : "close-menu"}`}>
        <i onClick={closeMenu} class="fa-solid fa-x"></i>
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
>>>>>>> huyen
    </div>
  );
}

export default Header;

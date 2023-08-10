import "./Header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
      </ul>
    </div>
  );
}
export default Header;

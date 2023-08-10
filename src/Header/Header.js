import "./Header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="container-logo">
        <img className="logo" src="/imgs/logo.jpeg" />
        <div className="logo-text">StreamEase</div>
      </div>
      <ul className="link">
        <li>
          <Link to="/" className="item-link">
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link to="/films" className="item-link">
            <div>Films</div>
          </Link>
        </li>
        <li>
          <Link to="/feedback" className="item-link">
            <div>Feedback</div>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="item-link">
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

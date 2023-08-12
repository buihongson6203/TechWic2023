import React from "react";
import { Link } from "react-router-dom";
import "./SiteMap.css";

function SiteMap() {
  const headingStyle = {
    textDecoration: 'none',
  };
  return (
    <div className="top-section">
     
      <table>
        <tr>
          <th>
            <Link to="/" className="sitemap-link">
              <h3 style={headingStyle}>Home</h3>
            </Link>
          </th>
          <th className="center">
            <Link to="/films" className="sitemap-link">
              <h3 style={headingStyle}>Category</h3>
            </Link>
          </th>
          <th>
            <Link to="/PriceList" className="sitemap-link">
              <h3 style={headingStyle}>Supplier</h3>
            </Link>
          </th>
        </tr>
        <tr>
          <th>
            <Link to="/films" className="link">
              <p className="P">Films</p>
            </Link>
          </th>
          <th className="center">
            <Link to="/films" className="link">
              <p className="P" >Anime</p>
            </Link>
          </th>
          <th>
            <Link to="/PriceList" className="link">
              <p className="P">Netflix</p>
            </Link>
          </th>
        </tr>
        <tr>
          <th>
            <Link to="/fav" className="link">
              <p className="P">Favourite Films</p>
            </Link>
          </th>
          <th className="center">
            <Link to="/films" className="link">
              <p className="P">Actions</p>
            </Link>
          </th>
          <th>
            <Link to="/PriceList" className="link">
              <p className="P" >HBO Max</p>
            </Link>
          </th>
        </tr>

        <tr>
          <th>
            <Link to="/feedback" className="link">
              <p className="P">Feedback</p>
            </Link>
          </th>
          <th className="center">
            <Link to="/films" className="link">
              <p className="P">TV Shows</p>
            </Link>
          </th>
          <th>
            <Link to="/PriceList" className="link">
              <p className="P">Disney+</p>
            </Link>
          </th>
        </tr>
        <tr>
          <th>
            <Link to="/contact" className="link">
              <p className="P" >Contact</p>
            </Link>
          </th>
          <th className="center">
            <Link to="/films" className="link"> 
              <p className="P">Horror</p>
            </Link>
          </th>
          <th>
            <Link to="/PriceList " className="link">
              <p className="P">Amazon Prime</p>
            </Link>
          </th>
        </tr>
        <tr>
          <th>
            <Link to="/sitemap" className="link">
              <p className="P">SiteMap</p>
            </Link>
          </th>
        </tr>
        <tr>
          <th>
            <Link to="/providers" className="link">
              <p className="P">Stream Providers</p>
            </Link>
          </th>
        </tr>
        <tr>
          <th>
            <Link to="/PriceList" className="link">
              <p className="P" >PriceList</p>
            </Link>
          </th>
        </tr>
      </table>
    </div>
  );
}

export default SiteMap;

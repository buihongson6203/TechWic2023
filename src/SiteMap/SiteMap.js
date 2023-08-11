import React from "react";
import { Link } from "react-router-dom";
import "./SiteMap.css";

function SiteMap() {
  return (
    <div className="top-section">
      <h1 className="sitemap">Site Map</h1>
      <section className="info-section">
        <ul>
          <li>
            <Link to="/" className="sitemap-link">
              <h2> Phim hay</h2>
            </Link>
          </li>
          <li>
            <Link to="/films" >
              <p className="link"> Films</p>
            </Link>
          </li>
          <li>
            <Link to="/fav">
              <p  className="link">Favourite Films</p>
            </Link>
          </li>
          <li>
            <Link to="/FeedBack" >
              <p className="link"> FeedBack</p>
            </Link>
          </li>
          <li>
            <Link to="/Contact" >
              <p className="link"> Contact</p>
            </Link>
          </li>
          <li>
            <Link to="/Providers" >
              <p className="link"> Stream Providers</p>
            </Link>
          </li>
        </ul>
      </section>
      <section className="info-section">
        <ul>
          <li>
            <Link to="/" className="sitemap-link">
              <h2> Thể loại </h2>
            </Link>
          </li>
          <li>
            <Link to="/films" >
              <p className="link"> Phim Âu Mỹ</p>
            </Link>
          </li>
          <li>
            <Link to="/feedback">
              <p  className="link"> Phim Hàn Quốc</p>
            </Link>
          </li>
          <li>
            <Link to="/contact" >
              <p className="link"> Phim Trung Quốc</p>
            </Link>
          </li>
          <li>
            <Link to="/sitemap" >
              <p className="link"> Phim Nhật Bản</p>
            </Link>
          </li>
          <li>
            <Link to="/sitemap" >
              <p className="link"> Phim Thái Lan</p>
            </Link>
          </li>
        </ul>
      </section>
      <section className="info-section">
        <ul>
          <li>
            <Link to="/" className="sitemap-link">
              <h2>Phim hay</h2>
            </Link>
          </li>
          <li>
            <Link to="/films" >
              <p className="link"> Phim Âu Mỹ</p>
            </Link>
          </li>
          <li>
            <Link to="/feedback" >
              <p className="link"> Phim Hàn Quốc</p>
            </Link>
          </li>
          <li>
            <Link to="/contact" >
              <p className="link"> Phim Trung Quốc</p>
            </Link>
          </li>
          <li>
            <Link to="/sitemap" >
              <p className="link" > Phim Nhật Bản</p>
            </Link>
          </li>
          <li>
            <Link to="/sitemap">
              <p  className="link"> Phim Thái Lan</p>
            </Link>
          </li>
        </ul>
      </section>
      <section className ="links-section">
        <ul>
          <li>
            <Link to="/" className="sitemap-link">
              <h2>Phim mới</h2>
            </Link>
          </li>
          <li>
            <Link to="/films" >
              <p className="link"> Phim Khoa Học</p>
            </Link>
          </li>
          <li>
            <Link to="/feedback">
              <p  className="link"> Phim Kinh Dị</p>
            </Link>
          </li>
          <li>
            <Link to="/contact" >
              <p className="link"> Phim Chiếu Rạp</p>
            </Link>
          </li>
          <li>
            <Link to="/sitemap">
              <p  className="link"> Phim Hình Sự</p>
            </Link>
          </li>
          <li>
            <Link to="/sitemap" >
              <p  className="link"> Phim Hành Động</p>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SiteMap;

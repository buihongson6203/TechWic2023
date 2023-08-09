import React from "react";
import { Link } from "react-router-dom";
import "./SiteMap.css";

function SiteMap() {
  return (
    <div className="sitemap-container">
      <div className="container">
        <div>
          <div className="sitemap-section">
            <p className="lg">StreamEase</p>
            <img className="logo" src="/imgs/EASE.png" />

          </div>
          <div className="sitemap ">
            - Online movie viewing page with new interface layout and
            user-friendly design. Movie sources are compiled from major websites
            with a wide variety of movie titles and genres.
          </div>
        </div>
        <div className="sitemap-section">
          <ul className="sitemap-list">
            <li>
              <Link to="/" className="sitemap-link">
                Phim hay
              </Link>
            </li>
            <li>
              <Link to="/films" className="link">
                <p> Phim Âu Mỹ</p>
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="link">
                <p> Phim Hàn Quốc</p>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                <p> Phim Trung Quốc</p>
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="link">
                <p> Phim Nhật Bản</p>
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="link">
                <p> Phim Thái Lan</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sitemap-section">
          <ul className="sitemap-list">
            <li>
              <Link to="/" className="sitemap-link">
                Phim mới
              </Link>
            </li>
            <li>
              <Link to="/films" className="link">
                <p> Phim Khoa Học</p>
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="link">
                <p> Phim Kinh Dị</p>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                <p> Phim Chiếu Rạp</p>
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="link">
                <p> Phim Hình Sự</p>
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="link">
                <p> Phim Hành Động</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SiteMap;

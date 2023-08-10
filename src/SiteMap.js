import React from "react";
import { Link } from "react-router-dom";
import "./SiteMap.css";

function SiteMap() {
  return (
    <div className="top-section">
      <section className="info-section">
        <ul>
          <li>
            <Link to="/" className="sitemap-link">
              <h3> Phim hay</h3>
             
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
      </section>
      <section className="info-section">
        <ul>
          <li>
            <Link to="/" className="sitemap-link">
              <h3> Thể loại </h3>
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
      </section>
      <section className="info-section">
        <ul>
          <li>
            <Link to="/" className="sitemap-link">
              <h3>Phim hay</h3>
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
      </section>
      <section className="links-section">
        <ul>
          <li>
            <Link to="/" className="sitemap-link">
              <h3>Phim mới</h3>
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
      </section>
    </div>
  );
}

export default SiteMap;

import "./Films.css";
function Films() {
  const films = [
    {
      id: 1,
      title: "Tập 16 vietsub",
      image:
        "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Alienoid_Cuoc_chien_xuyen_khong_72143fde54.jpg",
      name: "Cuộc chiến xuyên không",
    },
    {
      id: 2,
      title: "Tập 14 vietsub",
      image:
        "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Sat_thu_doi_dau_086fc7854a.jpg",
      name: "Sát thủ đối đầu",
    },
    {
      id: 3,
      title: "Tập 24 vietsub",
      image:
        "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Lien_minh_sieu_thu_DC_2726e64fb3.jpg",
      name: "Liên mInh siêu thú",
    },
    {
      id: 4,
      title: "Tập 16 vietsub",
      image:
        "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Dieu_uoc_cuoi_cua_tu_nhan_2037_c80b96b25c.jpg",
      name: "Điều ước của tù nhân",
    },
    {
      id: 5,
      title: "Tập 10 vietsub",
      image:
        "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Dan_choi_khong_so_con_roi_dafbfa57b6.jpg",
      name: "Dân chơi không sợ con rơi",
    },
    {
      id: 6,
      title: "Tập 16 vietsub",
      image:
        "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Chuyen_ma_giang_duong_hoc_ky_2_279956df2c.jpg",
      name: "Chuyện ma giảng đường",
    },
    {
      id: 7,
      title: "Tập 12 vietsub",
      image:
        "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Tham_tu_lung_danh_conan_nang_dau_halloween_062c584d70.jpg",
      name: "Conan",
    },
    {
      id: 8,
      title: "Tập 16 vietsub",
      image:
        "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Alienoid_Cuoc_chien_xuyen_khong_72143fde54.jpg",
      name: "Cuộc chiến xuyên không",
    },
    {
      id: 9,
      title: "Tập 14 vietsub",
      image:
        "https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Sat_thu_doi_dau_086fc7854a.jpg",
      name: "Sát thủ đối đầu",
    },
  ];
  return (
    <div className="container-film">
      <div className="wrapper-seclect">
        <div>
          <select id="movie-type">
            <option value="action">Hành động</option>
            <option value="comedy">Hài</option>
            <option value="drama">Kịch tính</option>
            <option value="fantasy">Kỳ ảo</option>
          </select>
        </div>
        <div>
          <select id="movie-type">
            <option value="name">A-Z</option>
            <option value="rating">a-z</option>
            <option value="year">0-9</option>
          </select>
        </div>
        <div>
          <select id="movie-type">
            <option value="action">Việt Nam</option>
            <option value="comedy">Hàn Quốc</option>
            <option value="drama">Nhật Bản</option>
            <option value="fantasy">Trung Quốc</option>
          </select>
        </div>
         <div>
        
      </div>
        <div>
          <select id="movie-type">
            <option value="action">2010-2012</option>
            <option value="comedy">2013-2015</option>
            <option value="drama">2015-2020</option>
            <option value="fantasy">2020-nay</option>
          </select>
        </div>
        <input className="input" type="text" placeholder="Search film..."/>
      </div>

      <div>
        <div className="wrapper-film">
          {films.map((item) => (
            <div className="item-film" key={item.id}>
              <div className="title">{item.title}</div>
              <img className="logo" src={item.image} alt={item.name} />
              <div className="name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="wrapper-film">
          {films.map((item) => (
            <div className="item-film" key={item.id}>
              <div className="title">{item.title}</div>
              <img className="logo" src={item.image} alt={item.name} />
              <div className="name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Films;

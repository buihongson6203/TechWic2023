// import 'bootstrap/dist/css/bootstrap.min.css';
import "./DetailFilm.css";
// import { Button, Container, Row, Col } from 'react-bootstrap';
function DetailFilm() {
  return (
    <div className="container-detail">
      <div className="">
        <div>
          <img
            className="img-big"
            src="https://simg.zalopay.com.vn/zlp-website/assets/phim_moi_chieu_rap_Alienoid_Cuoc_chien_xuyen_khong_72143fde54.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <h2 className="update">Tập mới</h2>
        <div className="name-film">Cuộc chiến xuyên không</div>
        <div className="review">
          <div>45p/tập</div>
          <div>Hành động , kịch tính</div>
        </div>
        <div className="decripsion">
          Là bộ phim hành động giả tưởng nên các trận chiến tay đôi cũng được
          chú trọng. Tuy nhiên, do hầu hết nhân vật đều là pháp sư hoặc quái vật
          thích sử dụng xúc tu nên những pha xáp lá cà có phần ít ỏi. Ngược lại,
          pha bay nhảy chất lượng xuất hiện nhiều ở Cuộc Chiến Xuyên Không. Ngày
          nay, có lẽ, cái nôi Trung Quốc phải học tập Hàn Quốc về việc quay cảnh
          bay thế nào cho đẹp mắt.
        </div>
      </div>
    </div>
  );
}
export default DetailFilm;

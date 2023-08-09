import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="name">StreamEase</div>
        <div className="address">
          <span className="active">Address</span>: 285 Doi Can, Ba Dinh, Ha Noi.
        </div>
        <div className="address">
          <span className="active">Mail</span>:
          debugTeam.job@aptechlearning.edu.vn.
        </div>
        <div className="address">
          <span className="active">Phone</span>: 19008923
        </div>
      </div>
      <div className="footer-right">
        <div className="name">Our Services</div>
        <div className="address">
        <i className="fa-solid fa-angle-right"></i>
          <div>Tv Show</div>
        </div>
        <div className="address">
        <i className="fa-solid fa-angle-right"></i>
          <div>Green Room</div>
        </div>
        <div className="address">
        <i className="fa-solid fa-angle-right"></i>
          <div>Film Festivals</div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

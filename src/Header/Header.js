import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="container-logo">
        <img className="logo" src="/imgs/logo.jpeg" />
        <div className="logo-text">StreamEase</div>
      </div>
      <ul className="link">
        <li>
          <a className="item-link" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="item-link" href="#film">
            Films
          </a>
        </li>
        <li>
          <a className="item-link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="item-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Header;

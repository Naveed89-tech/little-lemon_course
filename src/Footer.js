import "./Footer.css";
import logo from "./images/Vector3.png";
function Footer() {
  return (
    <footer className="footer ">
      <div className=" grid grid--footer">
        <div className="logo-col">
          <a href="#home">
            <img src={logo} alt="food-logo" className="logo" />
          </a>
          <nav className="nav-col">
            <ul className="social-link">
              <li>
                <a href="#home" className="footer-link">
                  <i className="fab fa-facebook social-icons"></i>
                </a>
              </li>
              <li>
                <a href="#home" className="footer-link">
                  <i className="fab fa-instagram social-icons"></i>
                </a>
              </li>
              <li>
                <a href="#home" className="footer-link">
                  <i className="fab fa-twitter social-icons"></i>
                </a>
              </li>
            </ul>
          </nav>
          <p className="footer-copyright">
            Copyright &copy 2027 by Little-Lemon inc.All rights reserve.
          </p>
        </div>
        <div className="address">
          <p className="footer-heading">Contact-us</p>
          <address className="address">
            <p className="address-text">
              623 Harrison St.2nd Floor,Chicago,CA 94107
            </p>

            <p className="address-contact ">
              <a className="footer-link" href={"tel:415-201-6370"}>
                415-201-6370
              </a>
              <a className="footer-link" href={"mailto:hello@Ominifood.com"}>
                hello@Little-Lemon.com
              </a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>

          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#home">
            
                Create account
              </a>
            </li>
            <li>
             
              <a className="footer-link" href="#home">
            
                Sign in
              </a>
            </li>
            <li>
           
              <a className="footer-link" href="#home">
             
                IoS app
              </a>
            </li>
            <li>
              {" "}
              <a className="footer-link" href="#home">
                Android app{" "}
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Compnay</p>

          <ul className="footer-nav">
            <li>
              {" "}
              <a className="footer-link" href="#home">
                {" "}
                About Little Lemon
              </a>
            </li>
            <li>
              {" "}
              <a className="footer-link" href="#home">
                {" "}
                For Business
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="footer-link" href="#home">
                {" "}
                Cooking parteners{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="footer-link" href="#home">
                carriers{" "}
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>

          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#home">
                {" "}
                Recipe direction
              </a>
            </li>
            <li>
              {" "}
              <a className="footer-link" href="#home">
                {" "}
                Help Center
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="footer-link" href="#home">
                {" "}
                Privacy & Security{" "}
              </a>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

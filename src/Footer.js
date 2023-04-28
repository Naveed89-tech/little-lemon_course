import "./Footer.css";
import logo from "./images/Vector3.png";
function Footer() {
  return (
    <footer class="footer ">
      <div class=" grid grid--footer">
        <div class="logo-col">
          <a href="#">
            <img src={logo} alt="food-logo" class="logo" />
          </a>
          <nav class="nav-col">
            <ul class="social-link">
              <li>
                <a href="#" class="footer-link">
                  <i class="fab fa-facebook social-icons"></i>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <i class="fab fa-instagram social-icons"></i>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <i class="fab fa-twitter social-icons"></i>
                </a>
              </li>
            </ul>
          </nav>
          <p class="footer-copyright">
            Copyright &copy 2027 by Omnifood inc.All rights reserverds.
          </p>
        </div>
        <div class="adress">
          <p class="footer-heading">Contact-us</p>
          <address class="address">
            <p class="address-text">
              623 Harrison St.2nd Floor,Chicago,CA 94107
            </p>

            <p class="address-contact ">
              <a class="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <a class="footer-link" href="mailto:hello@Ominifood.com">
                hello@Little-Lemon.com
              </a>
            </p>
          </address>
        </div>
        <nav class="nav-col">
          <p class="footer-heading">Account</p>

          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                {" "}
                Create account
              </a>
            </li>
            <li>
              {" "}
              <a class="footer-link" href="#">
                {" "}
                Sign in
              </a>{" "}
            </li>
            <li>
              {" "}
              <a class="footer-link" href="#">
                {" "}
                IoS app{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a class="footer-link" href="#">
                Android app{" "}
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Compnay</p>

          <ul class="footer-nav">
            <li>
              {" "}
              <a class="footer-link" href="#">
                {" "}
                About Little Lemon
              </a>
            </li>
            <li>
              {" "}
              <a class="footer-link" href="#">
                {" "}
                For Business
              </a>{" "}
            </li>
            <li>
              {" "}
              <a class="footer-link" href="#">
                {" "}
                Cooking parteners{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a class="footer-link" href="#">
                carriers{" "}
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Resources</p>

          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                {" "}
                Recipe direction
              </a>
            </li>
            <li>
              {" "}
              <a class="footer-link" href="#">
                {" "}
                Help Center
              </a>{" "}
            </li>
            <li>
              {" "}
              <a class="footer-link" href="#">
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

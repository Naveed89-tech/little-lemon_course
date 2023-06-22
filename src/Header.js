import "./Header.css";
import "./index.css";
import { ReactComponent as Logo } from "./images/Logo.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header container">
      <nav className="navigation">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <ul className="navigation_list">
          <li className="navigation_list_item">Home</li>
          <li className="navigation_list_item">New</li>
          <li className="navigation_list_item">Popular</li>
          <li className="navigation_list_item">Trending</li>
          <li className="navigation_list_item">Categories</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

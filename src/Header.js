import "./Header.css";
import "./index.css";
import { ReactComponent as Logo } from "./images/Logo.svg";

function Header() {
  return (
    <header className="header container">
      <nav className="navigation">
        <div className="logo">
          <Logo />
        </div>
        <ul className="navigation_list">
          <li claName="navigation_list_item">Home</li>
          <li claName="navigation_list_item">New</li>
          <li claName="navigation_list_item">Popular</li>
          <li claName="navigation_list_item">Trending</li>
          <li claName="navigation_list_item">Categories</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

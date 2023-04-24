import "./Header.css";
import { ReactComponent as Logo } from "./images/Logo.svg";

function Header() {
  return (
    <header class="header">
      <nav class="navigation">
        <div class="logo">
          <Logo />
        </div>
        <ul class="navigation_list">
          <li class="navigation_list_item">Home</li>
          <li class="navigation_list_item">New</li>
          <li class="navigation_list_item">Popular</li>
          <li class="navigation_list_item">Trending</li>
          <li class="navigation_list_item">Categories</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

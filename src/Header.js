import "./Header.css";
import "./index.css";
import { ReactComponent as Logo } from "./images/Logo.svg";
import { Link } from "react-router-dom";
import Desktop from "./pages/navigation/Desktop";
import SmallDevice from "./pages/navigation/SmallDevice";
import { useState } from "react";
function Header() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const handleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };
  return (
    <header className={`header container ${openNavigation && "open-nav"}`}>
      <nav className="navigation">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <Desktop onClick={handleNavigation} />
        <SmallDevice onClick={handleNavigation} />
      </nav>
    </header>
  );
}

export default Header;

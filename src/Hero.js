import "./Hero.css";
// import { ReactComponent as Logo } from "./images/Logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import resturantfood from "./images/resturantfood.jpg";
function Hero() {
  return (
    <motion.section
      className="section-hero "
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className="hero container">
        <div className="hero-text-box">
          <h1 className="heading-primary">Little Lemon</h1>
          <span className="branch-title">Chicago</span>
          <p className="text-description hero-description">
            Little lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails i a livery but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
          {/* <!-- using anchor instead of button element due to button should be used for action purpose  --> */}
          <Link to="/Reserve" className="btn">
            Reserve a table
          </Link>
        </div>
        <div className="image-box">
          <img src={resturantfood} alt="resturant food" className="meal-img" />
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;

import "./Hero.css";
// import { ReactComponent as Logo } from "./images/Logo.svg";

import resturantfood from "./images/resturantfood.jpg";
function Hero() {
  return (
    <section className="section-hero ">
      <div className="hero container">
        <div class="hero-text-box">
          <h1 class="heading-primary">Little Lemon</h1>
          <span className="branch-title">Chicago</span>
          <p class="text-description hero-description">
            Little lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails i a livery but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
          {/* <!-- using anchor instead of button element due to button should be used for action purpose  --> */}
          <a href="#" class="btn">
            Reserve a table
          </a>
        </div>
        <div className="image-box">
          <img src={resturantfood} alt="resturant food" className="meal-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

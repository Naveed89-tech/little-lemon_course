import "./About.css";
// import { ReactComponent as Logo } from "./images/Logo.svg";
import intro from "./images/intro.jpg";
function About() {
  return (
    <section className="section-about ">
      <div className="hero container">
        <div class="hero-text-box">
          <h1 class="heading-secondary">Little Lemon</h1>
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
          <img src={intro} alt="resturant food" className="meal-img" />
        </div>
      </div>
    </section>
  );
}

export default About;

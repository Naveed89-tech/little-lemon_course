import "./Meal.css";
// import { ReactComponent as Logo } from "./images/Logo.svg";

import salad from "./images/Salad.jpg";
import riders from "./images/riders.svg";
import lemon_dessert from "./images/lemon-dessert.jpg";
import bruchetta from "./images/bruchetta.jpg";

function Meal() {
  return (
    <section className="section-meal ">
      <div className="container">
        <div className="meal-box">
          <h2 className="heading-secondary">This weekend specials!</h2>
          <a href="#" className="btn">
            Online Menu
          </a>
          {/* <!-- using anchor instead of button element due to button should be used for action purpose  --> */}
        </div>
        <div className="card-box grid grid--three--col">
          <div className="meal-card" id="meal-card">
            <img
              src={salad}
              alt="Barocoli and apples "
              className="meal-image"
            />
            <div className="meal-content">
              <span className="tag tag--vegtarian">Vegetarian</span>
              <div className="title-price">
                <p className="meal-title">Greek salad</p>
                <strong className="meal-price">$12.99</strong>
              </div>
              <p className="text-description hero-description">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <div className="bucket">
                <a href="#" className="btn delivery">
                  Order a Delivery
                  <span>
                    <img
                      src={riders}
                      alt="Barocoli and apples "
                      className="rider"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* 2nd card start */}
          <div className="meal-card" id="meal-card">
            <img src={bruchetta} alt="bruchetta " className="meal-image" />
            <div className="meal-content">
              <span className="tag tag--vegan">vegan</span>
              <span className="tag tag--peluo">peluo</span>
              <div className="title-price">
                <p className="meal-title">Bruchetta</p>
                <strong className="meal-price">$5.99</strong>
              </div>
              <p className="text-description hero-description">
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <div className="bucket">
                <a href="#" className="btn delivery">
                  Order a Delivery
                  <span>
                    <img
                      src={riders}
                      alt="Barocoli and apples "
                      className="rider"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* 2nd card end */}
          {/* 3rd card start */}
          <div className="meal-card" id="meal-card">
            <img
              src={lemon_dessert}
              alt="lemon_dessert "
              className="meal-image"
            />
            <div className="meal-content">
              <span className="tag tag--pudding">PUDDINGS</span>
              <span className="tag tag--dessert">DESSERTS</span>
              <div className="title-price">
                <p className="meal-title">Lemon Dessert</p>
                <strong className="meal-price">$5.00</strong>
              </div>
              <p className="text-description hero-description">
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <div className="bucket">
                <a href="#" className="btn delivery">
                  Order a Delivery
                  <span>
                    <img
                      src={riders}
                      alt="Barocoli and apples "
                      className="rider"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* 3rd card end  */}
        </div>
      </div>
    </section>
  );
}

export default Meal;

import "./Reserve.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Form.css";

// import { ReactComponent as Logo } from "./images/Logo.svg";

// import resturantfood from "./images/resturantfood.jpg";
import inroom from "../images/cta-1.png";
import Header from "../Header";
import Confirm from "./Confirm";
import Form from "./Form";

function Reserve(props) {
  // receiving values from form
  const [values, setValues] = useState("");

  const [confirm, setConfirmed] = useState("");

  const onOpenNextPage = (values) => {
    setConfirmed(true);
    setValues(values);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      {confirm ? (
        <Confirm
          date={values.reserveDate}
          time={values.reserveTime}
          place={values.sittingPlace}
          people={values.numberOfGuest}
          menu={values.menu}
          occasion={values.bookingOccasion}
        />
      ) : (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
          <Header />
          <section className="section-hero reserve ">
            <div className="container">
              <div className="cta">
                <div className="cta-action">
                  <div className="hero-text-box">
                    <span className="branch-titles">Table</span>
                    <h1 className="heading-primary">Reservation</h1>
                  </div>

                  <div className="dropdowns">
                    <Form
                      onOpenNextPage={onOpenNextPage}
                      availableTimes={props.availableTimes}
                    />
                  </div>
                </div>
                <div
                  className="cta-image"
                  style={{
                    backgroundImage: `url(${inroom})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    overflow: "hidden",
                  }}
                >
                  {/* <img src={inroom} alt="resturant food" className="meal-img" /> */}
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Reserve;

// { useState }

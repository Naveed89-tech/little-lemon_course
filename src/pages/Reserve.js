import "./Reserve.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Form.css";

// import { ReactComponent as Logo } from "./images/Logo.svg";

// import resturantfood from "./images/resturantfood.jpg";
import inroom from "../images/cta-1.png";
import Header from "../Header";
import Confirm from "./Confirm";
import Form from "./Form";
import { Link } from "react-router-dom";

function Reserve(props) {
  // receiving values from form
  const [values, setValues] = useState("");
  const [enteredDate, setDate] = useState("");
  const [enteredTime, setTime] = useState("");
  const [enteredGuest, setGuest] = useState("");
  const [enteredOccasion, setOccasion] = useState("");
  const [enteredPlace, setPlace] = useState("");
  const [enteredMenu, setMenu] = useState("");
  const [confirm, setConfirmed] = useState("");
  const [message, setMessage] = useState("");
  const [active, isActive] = useState(false);
  // For learning purpusoe only

  // disabled dates before today
  //  opening of next page
  const onOpenNextPage = (values) => {
    setConfirmed(true);
    setValues(values);
  };
  // submitHandler

  const submitHandler = (e) => {
    e.preventDefault();

    const tableReservation = {
      date: new Date(enteredDate),
      time: enteredTime,
      guest: enteredGuest,
      occasion: enteredOccasion,
      menu: enteredMenu,
      place: enteredPlace,
    };
    if (
      enteredTime === "" ||
      enteredGuest === "" ||
      enteredOccasion === "" ||
      enteredOccasion === "" ||
      enteredMenu === "" ||
      enteredPlace === ""
    ) {
      setConfirmed(false);
      isActive(true);
      setMessage("Please Enter Correct Data");
    } else {
      setConfirmed(true);
    }

    // setDate("");
    // setTime("");
    // setGuest("");
    // setOccasion("");
    // setMenu("");
    // setPlace("");
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
                    {/* <form className="form" onSubmit={submitHandler}>
                      <label htmlFor="res-date">
                        Choose date
                        <input
                          type="date"
                          id="res-date"
                          min={disableMinDate()}
                          className="date"
                          value={enteredDate}
                          onChange={dateChangeHandler}
                        />
                      </label>

                      <label htmlFor="res-time">
                        Choose time
                        <select
                          id="res-time"
                          value={enteredTime}
                          onChange={timeChangeHandler}
                        >
                          <option>Choose Time</option>
                          <option>17:00</option>
                          <option>18:00</option>
                          <option>19:00</option>
                          <option>20:00</option>
                          <option>21:00</option>
                          <option>22:00</option>
                        </select>
                      </label>
                      <label htmlFor="guests">
                        Number of guests
                        <input
                          type="text"
                          placeholder="Choose Number of Guest"
                          min="1"
                          max="10"
                          id="guests"
                          value={enteredGuest}
                          onChange={guestChangeHandler}
                        />
                      </label>
                      <label htmlFor="occasion">
                        Occasion
                        <select
                          id="occasion"
                          value={enteredOccasion}
                          onChange={occasionChangeHandler}
                        >
                          <option>Choose Occasion</option>
                          <option>Birthday</option>
                          <option>Anniversary</option>
                        </select>
                      </label>
                      <label htmlFor="place">
                        Choose Place
                        <select
                          id="place"
                          value={enteredPlace}
                          onChange={placeChangeHandler}
                        >
                          <option>Choose Sitting Place</option>
                          <option>OPEN LAWN</option>
                          <option>IN-ROOM DINING</option>
                          <option>EXECUTIVE LOUNGE</option>
                        </select>
                      </label>
                      <label htmlFor="menu">
                        Select Menu
                        <select
                          id="menu"
                          value={enteredMenu}
                          onChange={menuChangeHandler}
                        >
                          <option>Choose Menu</option>
                          <option>BREAKFAST</option>
                          <option>HI-TEA</option>
                          <option>DINNER</option>
                        </select>
                      </label>

                      <button
                        className="buttons"
                        type="submit"
                        value="Confirm Your Reservation"
                      >
                        Confirm Your Reservation
                      </button>
                    </form> */}
                    <Form
                      onOpenNextPage={onOpenNextPage}
                      availableTimes={props.availableTimes}
                    />

                    {/* confirmation  */}
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

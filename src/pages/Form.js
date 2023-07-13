import React from "react";
import { useFormik } from "formik";

import "./Form.css";
function Form(props) {
  const validate = (values) => {
    const errors = {};
    if (!values.reserveDate) {
      errors.reserveDate = "This field is required";
    }

    if (!values.reserveTime || values.reserveTime === "Choose Time") {
      errors.reserveTime = "This field is required";
    }
    if (!values.numberOfGuest || values.numberOfGuest < 1) {
      errors.numberOfGuest = "Enter at least one guest";
    } else if (values.numberOfGuest > 10) {
      errors.numberOfGuest = "Currently we handle only 10 guests";
    }
    if (
      !values.bookingOccasion ||
      values.bookingOccasion === "Choose Occasion"
    ) {
      errors.bookingOccasion = "This field is required";
    }
    if (
      !values.sittingPlace ||
      values.sittingPlace === "Choose Sitting Place"
    ) {
      errors.sittingPlace = "This field is required";
    }
    if (!values.menu || values.menu === "Choose Menu") {
      errors.menu = "This field is required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      reserveDate: "",
      reserveTime: "",
      numberOfGuest: "",
      bookingOccasion: "",
      sittingPlace: "",
      menu: "",
    },

    validate,
    onSubmit: (values) => {
      // m1 entered values
      // y1 enteredf values

      props.onOpenNextPage(values);
      formik.resetForm();
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <label htmlFor="reserveDate">
        Choose date
        <input
          type="date"
          name="reserveDate"
          id="reserveDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.reserveDate}
          autoComplete="given-name"
          min={new Date().toISOString().split("T")[0]}
          className={` ${
            formik.errors.reserveDate && formik.touched.reserveDate
              ? "error-border"
              : null
          }`}
        />
        {formik.touched.reserveDate && formik.errors.reserveDate ? (
          <span className="error">{formik.errors.reserveDate}</span>
        ) : null}
      </label>

      <label htmlFor="reserveTime">
        Choose time
        <select
          id="reserveTime"
          name="reserveTime"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.reserveTime}
          placeholder="Choose Time"
          className={` ${
            formik.errors.reserveTime && formik.touched.reserveTime
              ? "error-border"
              : null
          }`}
        >
          <option defaultValue>Choose Time</option>
          {props.availableTimes.map((time) => (
            <option key={time.id}> {time.time}</option>
          ))}
        </select>
        {formik.touched.reserveTime && formik.errors.reserveTime ? (
          <span className="error">{formik.errors.reserveTime}</span>
        ) : null}
      </label>

      <label htmlFor="numberOfGuest">
        Number of guests
        <input
          type="text"
          placeholder="Choose Number of Guest"
          min={1}
          max={10}
          id="numberOfGuest"
          name="numberOfGuest"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.numberOfGuest}
          className={` ${
            formik.errors.numberOfGuest && formik.touched.numberOfGuest
              ? "error-border"
              : null
          }`}
        />
        {formik.touched.numberOfGuest && formik.errors.numberOfGuest ? (
          <span className="error">{formik.errors.numberOfGuest}</span>
        ) : null}
      </label>
      <label htmlFor="bookingOccasion">
        Occasion
        <select
          id="bookingOccasion"
          name="bookingOccasion"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bookingOccasion}
          className={` ${
            formik.errors.bookingOccasion && formik.touched.bookingOccasion
              ? "error-border"
              : null
          }`}
        >
          <option defaultValue>Choose Occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {formik.touched.bookingOccasion && formik.errors.bookingOccasion ? (
          <span className="error">{formik.errors.bookingOccasion}</span>
        ) : null}
      </label>
      <label htmlFor="sittingPlace">
        Choose Place
        <select
          id="sittingPlace"
          name="sittingPlace"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sittingPlace}
          className={` ${
            formik.errors.sittingPlace && formik.touched.sittingPlace
              ? "error-border"
              : null
          }`}
        >
          <option defaultValue>Choose Sitting Place</option>
          <option>OPEN LAWN</option>
          <option>IN-ROOM DINING</option>
          <option>EXECUTIVE LOUNGE</option>
        </select>
        {formik.touched.sittingPlace && formik.errors.sittingPlace ? (
          <span className="error">{formik.errors.sittingPlace}</span>
        ) : null}
      </label>
      <label htmlFor="menu">
        Select Menu
        <select
          id="menu"
          name="menu"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.menu}
          className={` ${
            formik.errors.menu && formik.touched.menu ? "error-border" : null
          }`}
        >
          <option>Choose Menu</option>
          <option>BREAKFAST</option>
          <option>HI-TEA</option>
          <option>DINNER</option>
        </select>
        {formik.touched.menu && formik.errors.menu ? (
          <span className="error">{formik.errors.menu}</span>
        ) : null}
      </label>

      <button
        className="buttons"
        type="submit"
        value="Confirm Your Reservation"
      >
        Confirm Your Reservation
      </button>

      {/* button */}
    </form>
  );
}

export default Form;

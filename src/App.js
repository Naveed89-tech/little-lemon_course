import React, { useReducer, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Reserve from "./pages/Reserve";

import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Special from "./Meal";
import Testimonial from "./Testimonial";
import About from "./About";
import Confirm from "./pages/Confirm";

const updateTime = (state, action) => {
  if (action.type === "DATE") {
    return {
      ...state,
    };
  }
};

function App(props) {
  const [data, setReserveData] = useState("");
  const [btcData, setBtcData] = useState({});
  const [availableTimes, initializeTimes] = useReducer(updateTime, [
    {
      id: 0,
      time: "17:00",
    },
    {
      id: 1,
      time: "18:00",
    },
    {
      id: 2,
      time: "19:00",
    },
    {
      id: 3,
      time: "20:00",
    },
    {
      id: 4,
      time: "21:00",
    },
    {
      id: 5,
      time: "22:00",
    },
  ]);
  // updateTime function
  const dateChangleHandler = (e) => {
    initializeTimes({
      type: "DATE",
      value: { id: 0, time: "19:00" },
    });
  };

  const saveReservationData = (reserveData) => {
    setReserveData(reserveData);
  };

  return (
    <AnimatePresence>
      <Router>
        <div className="App">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Header />
                  <Hero />
                  <Special />
                  <Testimonial />
                  <About />

                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/Reserve"
              element={
                <Reserve
                  onSaveReserveData={saveReservationData}
                  availableTimes={availableTimes}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;

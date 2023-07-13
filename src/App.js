import React from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reserve from "./pages/Reserve";

import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Special from "./Meal";
import Testimonial from "./Testimonial";
import About from "./About";

function App(props) {
  // updateTime function

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
            <Route path="/Reserve" element={<Reserve />} />
          </Routes>
        </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;

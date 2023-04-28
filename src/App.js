import "./App.css";
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Special from "./Meal";
import Testimonial from "./Testimonial";
import About from "./About";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Special />
      <Testimonial />
      <About />
      <Footer />
    </div>
  );
}

export default App;

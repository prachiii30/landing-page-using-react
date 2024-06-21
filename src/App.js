import "./App.css";
import Home from "../Components/Home.js";
import About from "../components/About.js";
import Work from "../Components/Work.js";
import Testimonial from "../components/Testimonial.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      disable: "phone",
      easing: "ease-out-sine",
    });
  });
  
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

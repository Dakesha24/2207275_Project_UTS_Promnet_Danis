import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Galery from "./components/Galery/galery";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

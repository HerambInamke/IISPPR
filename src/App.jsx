// Sets up React Router for client-side routing and imports all main page components.
// Defines the application's route structure, mapping paths to their respective components.

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Gallery1 from "./pages/Gallery1";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;

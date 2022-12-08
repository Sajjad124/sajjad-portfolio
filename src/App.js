import React from "react";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Services from "./Components/Services";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

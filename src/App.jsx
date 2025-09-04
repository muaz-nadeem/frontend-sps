import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products"
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Pricing from "./Pages/Pricing";
import Services from "./Pages/Services";
import FlowbiteInitializer from "./components/FLowbiteInitializer";

import React  from 'react';
import AboutUs from "./Pages/AboutUs";
function App() {

  return (
    <Router basename="/frontend-sps">
      <FlowbiteInitializer /> 
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* Change the route from :planId to :planName */}
        <Route path="/pricing/:planName" element={<Pricing />} />
        <Route path="/services/:serviceName" element={<Services/>}/>
        <Route path="/about-us/contact" element={<AboutUs/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

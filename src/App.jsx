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
import Blog from "./Pages/Blog";
function App() {

  return (
    <Router basename="/frontend-sps">
      <FlowbiteInitializer /> 
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing/:planName" element={<Pricing />} />
        <Route path="/services/:serviceName" element={<Services/>}/>
        <Route path="/activities/blog" element={<Blog/>}/>
        <Route path="/about-us/contact" element={<AboutUs/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import FlowbiteInitializer from "./components/FLowbiteInitializer";
import React, { Suspense } from 'react';

// Lazy-loaded components
const Home = React.lazy(() => import('./Pages/Home'));
const Products = React.lazy(() => import('./Pages/Products'));
const Pricing = React.lazy(() => import('./Pages/Pricing'));
const Services = React.lazy(() => import('./Pages/Services'));
const Blog = React.lazy(() => import('./Pages/Blog'));
const AboutUs = React.lazy(() => import('./Pages/AboutUs'));

function App() {
  return (
    <Router basename="/frontend-sps">
      <FlowbiteInitializer />
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing/:planName" element={<Pricing />} />
          <Route path="/services/:serviceName" element={<Services />} />
          <Route path="/activities/blog" element={<Blog />} />
          <Route path="/about-us/contact" element={<AboutUs />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
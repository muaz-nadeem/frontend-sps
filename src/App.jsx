import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products"
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'flowbite';
import Footer from "./components/Footer";
import Pricing from "./Pages/Pricing";
function App() {
  return (
    <Router basename="/frontend-sps">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* Change the route from :planId to :planName */}
        <Route path="/pricing/:planName" element={<Pricing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

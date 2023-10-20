import React from "react";
import Home from "./route/home";
import Contact from "./components/Footer"
import Event from "./route/event";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import Signup from "./components/Signup";
import Cart from "./components/Cart"
import Sell from "./components/Sell";
import Profile from "./components/Profile"
import Product from './components/Product'
import Createaccount from "./components/createaccount";
import Sample from "./components/sample";
function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} exact/>
          <Route path="/signup" element={<Signup />} exact/>
          <Route path="/cart" element={<Cart/>} exact/>
          <Route path="/sell" element={<Sell/>} exact/>
          <Route path="/profile" element={<Profile />} exact/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/createaccount" element={<Createaccount />}/>
          
        </Routes>
      </Router>
      <div><Sample/></div>
<div><Footer/></div>
     </>
  );
}

export default App;

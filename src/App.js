import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Products from './components/Products';
import ErrorPage from './components/ErrorPage';
import DiamondDrilling from './components/DiamondDrilling';
import RockDrilling from './components/RockDrilling';
import './App.css';

function App() {
  return (
    <div className="app-wrap">
      <BrowserRouter>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/diamond-drilling" element={<DiamondDrilling />} />
          <Route path="/products/rock-drilling" element={<RockDrilling />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

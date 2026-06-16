import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Solutions from '../pages/Solutions';
import Product from '../pages/Product';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={
          <MainLayout>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/product" element={<Product />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

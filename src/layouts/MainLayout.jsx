import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ClickRipple from '../components/common/ClickRipple';
import SEO from '../components/common/SEO';

const MainLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <SEO />
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <ClickRipple />
    </div>
  );
};

export default MainLayout;

import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import IntroSequence from '../components/IntroSequence/IntroSequence';
import ClickRipple from '../components/shared/ClickRipple/ClickRipple';

const MainLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <IntroSequence />
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

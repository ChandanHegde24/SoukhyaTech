import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ClickRipple from '../components/common/ClickRipple';
import SEO from '../components/common/SEO';
import ScrollToTop from '../components/common/ScrollToTop';
import GlobalScrollProgress from '../components/common/GlobalScrollProgress';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="app-layout">
      <SEO />
      <GlobalScrollProgress />
      <Navbar />
      <main className="main-content">
        <motion.div
          key={location.pathname}
          className="page-transition-wrapper"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
      <ClickRipple />
    </div>
  );
};

export default MainLayout;

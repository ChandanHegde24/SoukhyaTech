import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import { routeDefinitions } from './routeDefinitions';

function PageRouteTracker() {
  const { pathname } = useLocation();
  const [navigating, setNavigating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavigating(true);
    const t = setTimeout(() => setNavigating(false), 300);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {navigating && (
        <motion.div
          className="route-progress-bar"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, var(--brand-indigo), var(--brand-blue), var(--green))',
            transformOrigin: 'left',
            zIndex: 10001,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
}

const AppRoutes = () => {
  return (
    <Router>
      <PageRouteTracker />
      <MainLayout>
        <Routes>
          {routeDefinitions.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;

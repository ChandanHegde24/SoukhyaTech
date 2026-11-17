import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { routeDefinitions } from './routeDefinitions';

function PageRouteTracker() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
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

import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { routeDefinitions } from './routeDefinitions';

const NotFound = lazy(() => import('../pages/NotFound'));

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
        <Suspense fallback={<div className="page-route-fallback" style={{ minHeight: '60vh' }} aria-hidden="true" />}>
          <Routes>
            {routeDefinitions.map(({ path, Page }) => (
              <Route key={path} path={path} element={<Page />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;

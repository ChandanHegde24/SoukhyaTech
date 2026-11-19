import React, { lazy } from 'react';
import Home from '../pages/Home.jsx';
import { primaryNavigation } from '../data/navigation.js';

// Route-based code splitting for secondary pages to reduce initial JavaScript payload
const About = lazy(() => import('../pages/About.jsx'));
const Services = lazy(() => import('../pages/Services.jsx'));
const Solutions = lazy(() => import('../pages/Solutions.jsx'));
const Product = lazy(() => import('../pages/Product.jsx'));
const Contact = lazy(() => import('../pages/Contact.jsx'));

const pageConfigByPath = {
  '/': { Page: Home, title: 'Home' },
  '/services': { Page: Services, title: 'Services' },
  '/solutions': { Page: Solutions, title: 'Solutions' },
  '/product': { Page: Product, title: 'Product' },
  '/about': { Page: About, title: 'About' },
  '/contact': { Page: Contact, title: 'Contact' },
};

export const routeDefinitions = primaryNavigation.map(({ to: path }) => {
  const config = pageConfigByPath[path];

  if (!config) {
    throw new Error(`Navigation path "${path}" does not have a page component.`);
  }

  return { path, Page: config.Page, title: config.title };
});

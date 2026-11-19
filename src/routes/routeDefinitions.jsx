import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import Solutions from '../pages/Solutions.jsx';
import Product from '../pages/Product.jsx';
import Contact from '../pages/Contact.jsx';
import { primaryNavigation } from '../data/navigation.js';

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

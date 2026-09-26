import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import Solutions from '../pages/Solutions.jsx';
import Product from '../pages/Product.jsx';
import Contact from '../pages/Contact.jsx';
import { primaryNavigation } from '../config/navigation.js';

const pagesByPath = {
  '/': Home,
  '/about': About,
  '/services': Services,
  '/solutions': Solutions,
  '/product': Product,
  '/contact': Contact,
};

export const routeDefinitions = primaryNavigation.map(({ to: path }) => {
  const Page = pagesByPath[path];

  if (!Page) {
    throw new Error(`Navigation path "${path}" does not have a page component.`);
  }

  return { path, Page };
});

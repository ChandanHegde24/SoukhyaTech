import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Solutions from '../pages/Solutions';
import Product from '../pages/Product';
import Contact from '../pages/Contact';

export const routeDefinitions = [
  { path: '/', Page: Home },
  { path: '/about', Page: About },
  { path: '/services', Page: Services },
  { path: '/solutions', Page: Solutions },
  { path: '/product', Page: Product },
  { path: '/contact', Page: Contact },
];

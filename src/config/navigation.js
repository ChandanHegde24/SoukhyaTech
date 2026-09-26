export const primaryNavigation = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/product', label: 'Product' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const footerNavigation = [
  { label: 'Navigation', links: primaryNavigation },
  {
    label: 'Services',
    links: [
      { to: '/services', label: 'IT Audit & Advisory' },
      { to: '/services', label: 'Managed Security Services' },
      { to: '/services', label: 'Managed Network Services' },
      { to: '/services', label: 'Managed Cloud Services' },
      { to: '/services', label: 'Remote Monitoring and Management' },
    ],
  },
  {
    label: 'Solutions',
    links: [
      { to: '/solutions', label: 'Custom IoT Solutions' },
      { to: '/solutions', label: 'Smart Systems' },
      { to: '/solutions', label: 'Data Center Solutions' },
      { to: '/product', label: 'Earth-Pit Monitoring (I-ES)' },
    ],
  },
];

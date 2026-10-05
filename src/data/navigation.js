// Primary navigation — shared by Navbar and routeDefinitions
export const primaryNavigation = [
  { to: '/',          label: 'Home' },
  { to: '/services',  label: 'Services' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/product',   label: 'Product' },
  { to: '/about',     label: 'About' },
  { to: '/contact',   label: 'Contact' },
];

// Footer navigation — grouped columns used by Footer.jsx
export const footerNavigation = [
  {
    label: 'Company',
    links: [
      { to: '/',        label: 'Home' },
      { to: '/about',   label: 'About Us' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    label: 'Services',
    links: [
      { to: '/services#service-it-audit',         label: 'IT Audit & Advisory' },
      { to: '/services#service-managed-security', label: 'Managed Security' },
      { to: '/services#service-managed-network',  label: 'Managed Network' },
      { to: '/services#service-managed-cloud',    label: 'Managed Cloud' },
      { to: '/services#service-remote-monitoring',label: 'Remote Monitoring' },
    ],
  },
  {
    label: 'Solutions',
    links: [
      { to: '/solutions', label: 'IoT Solutions' },
      { to: '/solutions', label: 'Smart Systems' },
      { to: '/solutions', label: 'Data Center' },
      { to: '/product',   label: 'I-ES Product' },
    ],
  },
];

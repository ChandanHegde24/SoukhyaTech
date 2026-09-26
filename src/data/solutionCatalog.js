import { solutions } from './siteContent';

export const homeSolutionShowcase = [
  {
    ...solutions[0],
    img: solutions[0].image,
    secondaryImg: solutions[1].image,
    code: 'SYS-IOT-01',
    tags: ['Secure Architecture', 'Edge Computing', 'Device-to-Cloud', 'AI Analytics'],
  },
  {
    ...solutions[1],
    img: solutions[1].image,
    secondaryImg: solutions[2].image,
    code: 'SYS-SMT-02',
    tags: ['Energy Management', 'Agriculture', 'Retail Automation', 'Smart City'],
  },
  {
    ...solutions[2],
    img: solutions[2].image,
    secondaryImg: solutions[0].image,
    code: 'SYS-DTC-03',
    tags: ['Hardware Infrastructure', 'Storage & Compute', 'Networking', 'High Performance'],
  },
];

export const solutionShowcase = [
  {
    ...solutions[0],
    img: solutions[0].image,
    chip: 'IOT & IIOT ARCHITECTURE',
    code: 'SOL-01 // CONNECTED INDUSTRIES',
    tags: ['Secure Architecture', 'Real-time Monitoring', 'Device-to-Cloud', 'Edge Computing', 'AI Analytics'],
    accent: '#25A449',
    accentLight: 'rgba(37, 164, 73, 0.12)',
    shortTitle: 'CUSTOM IOT & IIOT',
    metric: 'EDGE TO CLOUD',
  },
  {
    ...solutions[1],
    img: solutions[1].image,
    chip: 'ADAPTIVE ECOSYSTEMS',
    code: 'SOL-02 // SMART ENVIRONMENTS',
    tags: ['Energy Management', 'Agriculture Optimization', 'Retail Automation', 'Smart City', 'Sensors'],
    accent: '#007CC4',
    accentLight: 'rgba(0, 124, 196, 0.12)',
    shortTitle: 'SMART SYSTEMS',
    metric: 'RESPONSIVE AI',
  },
  {
    ...solutions[2],
    img: solutions[2].image,
    chip: 'MISSION-CRITICAL HARDWARE',
    code: 'SOL-03 // PHYSICAL SYSTEMS',
    tags: ['Hardware Infrastructure', 'Storage & Compute', 'Networking', 'High Performance'],
    accent: '#2C3694',
    accentLight: 'rgba(44, 54, 148, 0.12)',
    shortTitle: 'DATA CENTER INFRASTRUCTURE',
    metric: 'HIGH-RELIABILITY',
  },
];

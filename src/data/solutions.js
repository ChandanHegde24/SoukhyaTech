// Solutions Page & Showcase Data

import customIoTSolutionsImage from '../assets/images/Custom IoT Solutions for Connected Industries.png';
import smartSystemsImage from '../assets/images/Smart Systems.png';
import dataCenterSolutionsImage from '../assets/images/Data Center Solutions.png';
import earthPitImg from '../assets/images/earth-pit-monitoring.jpg';

export const rawSolutions = [
  {
    id: 'custom-iot',
    title: 'Custom IoT Solutions for Connected Industries',
    paragraphs: [
      'We design and deliver custom IoT and IIoT solutions tailored to the unique operational needs of different industries. Our systems are built on secure and scalable IoT architectures that support reliable data collection, real-time monitoring, and seamless device-to-cloud communication.',
      'With integrated edge computing, AI-driven analytics, and cloud platforms, we enable intelligent automation, predictive decision-making, and operational efficiency. From initial hardware design and firmware development to deployment, maintenance, and lifecycle upgrades, we provide end-to-end IoT solution development that evolves as your business grows.',
    ],
    image: customIoTSolutionsImage,
  },
  {
    id: 'smart-systems',
    title: 'Smart Systems',
    paragraphs: [
      'IoT is reshaping how cities, businesses, and communities operate by enabling smarter, more sustainable environments. Our smart system solutions cover energy management, agriculture optimization, and retail automation, helping organizations leverage real-time data to improve efficiency, reduce waste, and enhance user experience.',
      'By connecting devices, sensors, and cloud intelligence, we create responsive and adaptive ecosystems that support better decision-making and long-term operational sustainability.',
    ],
    image: smartSystemsImage,
  },
  {
    id: 'data-center',
    title: 'Data Center Solutions',
    paragraphs: [
      'As organizations grow and data demands increase, reliable and efficient hardware becomes critical to maintaining smooth operations. Even with cloud and virtual infrastructure, secure and high-performance physical systems are essential to support workloads, storage, connectivity, and end-user access.',
      'Our Data Center Solutions ensure your infrastructure is built on hardware that is durable, scalable, and optimized for performance. From servers and storage to networking and endpoint devices, we help you select and deploy the right technology to support your applications, maintain security, and enable seamless access—whether employees are at their desks, in the field, or working remotely. Our approach ensures long-term reliability, reduced downtime, and optimal efficiency across your entire IT environment.',
    ],
    image: dataCenterSolutionsImage,
  },
];

export const homeSolutionShowcase = [
  {
    id: 'custom-iot',
    title: 'Custom IoT Solutions for Connected Industries',
    code: 'CONNECTED INDUSTRIES',
    shortDescription:
      'Custom IoT and IIoT architectures with edge computing, AI-driven predictive analytics, and seamless device-to-cloud communication.',
    paragraphs: [
      'Custom IoT and IIoT architectures with edge computing, AI-driven predictive analytics, and seamless device-to-cloud communication.',
    ],
    img: customIoTSolutionsImage,
    secondaryImg: smartSystemsImage,
    tags: ['Secure Architecture', 'Edge Computing', 'Device-to-Cloud', 'AI Analytics'],
  },
  {
    id: 'smart-systems',
    title: 'Smart Systems',
    code: 'SMART ENVIRONMENTS',
    shortDescription:
      'Responsive IoT ecosystems connecting sensors and cloud intelligence for energy management, agriculture optimization, and retail automation.',
    paragraphs: [
      'Responsive IoT ecosystems connecting sensors and cloud intelligence for energy management, agriculture optimization, and retail automation.',
    ],
    img: smartSystemsImage,
    secondaryImg: dataCenterSolutionsImage,
    tags: ['Energy Management', 'Agriculture Optimization', 'Retail Automation', 'Smart City'],
  },
  {
    id: 'data-center',
    title: 'Data Center Solutions',
    code: 'PHYSICAL SYSTEMS',
    shortDescription:
      'High-performance, durable physical infrastructure across servers, storage, networking, and endpoint devices engineered for maximum reliability.',
    paragraphs: [
      'High-performance, durable physical infrastructure across servers, storage, networking, and endpoint devices engineered for maximum reliability.',
    ],
    img: dataCenterSolutionsImage,
    secondaryImg: customIoTSolutionsImage,
    tags: ['Hardware Infrastructure', 'Storage & Compute', 'Networking', 'High Performance'],
  },
  {
    id: 'earth-pit-monitoring',
    title: 'Intelligent Earth-Pit Monitoring System (I-ES)',
    code: 'SAFETY & TELEMETRY',
    shortDescription:
      'Continuous 24/7 electrical grounding telemetry and advance fault detection to protect personnel, reduce downtime, and safeguard critical assets.',
    paragraphs: [
      'Continuous 24/7 electrical grounding telemetry and advance fault detection to protect personnel, reduce downtime, and safeguard critical assets.',
    ],
    img: earthPitImg,
    secondaryImg: customIoTSolutionsImage,
    tags: ['Grounding Telemetry', 'Fault Early Warning', 'Real-Time Monitoring', 'Asset Protection'],
  },
];

export const solutionShowcase = [
  {
    ...rawSolutions[0],
    img: rawSolutions[0].image,
    chip: 'IOT & IIOT ARCHITECTURE',
    code: 'CONNECTED INDUSTRIES',
    tags: ['Secure Architecture', 'Real-time Monitoring', 'Device-to-Cloud', 'Edge Computing', 'AI Analytics'],
    accent: '#25A449',
    accentLight: 'rgba(37, 164, 73, 0.12)',
    shortTitle: 'CUSTOM IOT & IIOT',
    metric: 'EDGE TO CLOUD',
  },
  {
    ...rawSolutions[1],
    img: rawSolutions[1].image,
    chip: 'ADAPTIVE ECOSYSTEMS',
    code: 'SMART ENVIRONMENTS',
    tags: ['Energy Management', 'Agriculture Optimization', 'Retail Automation', 'Smart City', 'Sensors'],
    accent: '#087DB9',
    accentLight: 'rgba(0, 124, 196, 0.12)',
    shortTitle: 'SMART SYSTEMS',
    metric: 'RESPONSIVE AI',
  },
  {
    ...rawSolutions[2],
    img: rawSolutions[2].image,
    chip: 'MISSION-CRITICAL HARDWARE',
    code: 'PHYSICAL SYSTEMS',
    tags: ['Hardware Infrastructure', 'Storage & Compute', 'Networking', 'High Performance'],
    accent: '#173B8F',
    accentLight: 'rgba(44, 54, 148, 0.12)',
    shortTitle: 'DATA CENTER INFRASTRUCTURE',
    metric: 'HIGH-RELIABILITY',
  },
];

export const technologyJourney = [
  { step: '01', title: 'DEVICES & SENSORS', desc: 'Hardware design, embedded telemetry & rugged physical instrumentation', color: '#25A449' },
  { step: '02', title: 'EDGE & GATEWAYS', desc: 'Secure local processing, OTA firmware management & protocol bridging', color: '#087DB9' },
  { step: '03', title: 'CONNECTED CLOUD', desc: 'Scalable cloud infrastructure, device fleet orchestration & storage', color: '#173B8F' },
  { step: '04', title: 'DECISION INTELLIGENCE', desc: 'AI-driven analytics, anomaly detection & operational dashboards', color: '#E68324' },
  { step: '05', title: 'SUSTAINED VALUE', desc: 'Continuous uptime, reduced operational waste & asset longevity', color: '#EC008C' },
];

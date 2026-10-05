// Services Page Static Content & Detailed Offerings

import itAuditImage from '../assets/images/IT Audit & Advisory.png';
import managedSecurityImage from '../assets/images/Managed Security Services.png';
import managedNetworkImage from '../assets/images/Managed Network Services.png';
import managedCloudImage from '../assets/images/Managed Cloud Services.png';
import remoteMonitoringImage from '../assets/images/Remote Monitoring and Management.png';

export const expertServices = [
  {
    id: 'it-audit',
    title: 'IT Audit & Advisory',
    description:
      'Information security governance covering People, Process, and Technology with Cyber Security policy creation, risk evaluation, and periodic VA/PT assessments.',
    link: '/services#service-it-audit',
    ctaText: 'Explore Service',
  },
  {
    id: 'managed-security',
    title: 'Managed Security Services',
    description:
      '24/7 Security Operations Center (SOC) monitoring, real-time threat defense, firewall and endpoint protection, SIEM log analytics, and rapid incident response.',
    link: '/services#service-managed-security',
    ctaText: 'Explore Service',
  },
  {
    id: 'managed-network',
    title: 'Managed Network Services',
    description:
      '24/7 proactive network monitoring, managing routers, switches, firewalls, Wi-Fi, and WAN/LAN systems with bandwidth optimization and rapid fault resolution.',
    link: '/services#service-managed-network',
    ctaText: 'Explore Service',
  },
  {
    id: 'managed-cloud',
    title: 'Managed Cloud Services',
    description:
      'End-to-end multi-cloud lifecycle management across public, private, and hybrid platforms with automated backup, workload migration, and cost optimization.',
    link: '/services#service-managed-cloud',
    ctaText: 'Explore Service',
  },
];

export const managedServices = [
  {
    id: 'it-audit',
    title: 'IT Audit & Advisory',
    chip: 'GOVERNANCE & VAPT',
    metric: 'PEOPLE · PROCESS · TECH',
    accent: '#087DB9',
    image: itAuditImage,
    paragraphs: [
      'Internationally recognized and trusted information security management standard that can be independently certified to cover People, Process and Technology. We help to create Cyber Security policy, IT and IS governance framework and VAPT audit with a suitable approach. The IT architecture framework which includes network, server, database and application, end user systems.',
      'Identify loopholes and Evaluate the Security Risk, create new security policies, track the effectiveness of security strategies and recognize, analyze, and address regulatory compliance and periodically conduct Vulnerability Assessment/ Penetration Testing (VA/PT) of web/ mobile applications, servers and network components.',
    ],
  },
  {
    id: 'managed-security',
    title: 'Managed Security Services',
    chip: '24/7 SOC DEFENSE',
    metric: 'SIEM & THREAT ANALYTICS',
    accent: '#173B8F',
    image: managedSecurityImage,
    paragraphs: [
      'Our Managed Security Services provide comprehensive, round-the-clock protection for your IT environment, ensuring your business stays secure, resilient, and compliant in an evolving cyber threat landscape. We monitor your networks and systems 24/7 through our Security Operations Center, manage firewalls and endpoint security, detect and respond to threats in real-time, and maintain centralized log and SIEM analytics for proactive risk reduction.',
      'Our services extend to cloud security management, identity and access controls, vulnerability assessments, penetration testing, and rapid incident response to minimize impact during security breaches. We also offer ongoing cyber awareness training to strengthen the human defense layer. With advanced security tools, expert analysts, and industry-standard frameworks, we help businesses maintain a strong security posture while focusing on core operations.',
    ],
  },
  {
    id: 'managed-network',
    title: 'Managed Network Services',
    chip: 'INFRASTRUCTURE ORCHESTRATION',
    metric: 'WAN / LAN 99.99% UPTIME',
    accent: '#25A449',
    image: managedNetworkImage,
    paragraphs: [
      'Our Managed Network Services ensure that your entire network infrastructure operates at peak performance, reliability, and security, allowing your teams to stay connected and productive at all times. We proactively monitor your network 24/7, manage routers, switches, firewalls, Wi-Fi, and WAN/LAN systems, and deliver rapid fault detection and resolution to minimize downtime.',
      'Our services include network configuration, performance optimization, bandwidth management, and secure remote connectivity, along with continuous firmware and policy updates. We also provide advanced network analytics to identify trends, prevent congestion, and support future growth. With scalable service models and expert support, we help maintain a robust, stable, and resilient network environment so your business can operate smoothly and confidently.',
    ],
  },
  {
    id: 'managed-cloud',
    title: 'Managed Cloud Services',
    chip: 'MULTI-CLOUD LIFECYCLE',
    metric: 'HYBRID & PUBLIC CLOUD',
    accent: '#087DB9',
    image: managedCloudImage,
    paragraphs: [
      'Our Managed Cloud Services ensure seamless, secure, and optimized operation of your cloud environments across public, private, and hybrid platforms. We handle the full lifecycle of your cloud ecosystem, including deployment, configuration, resource management, performance tuning, and cost optimization to ensure maximum efficiency and scalability.',
      'Our team provides 24/7 monitoring, backup and disaster recovery planning, identity and access governance, and robust security controls to safeguard your data and applications. We also assist with workload migration, multi-cloud orchestration, and continuous compliance alignment to support evolving business needs. With proactive support and expert cloud management, we help your organization achieve agility, resilience, and operational excellence in the cloud while you stay focused on your core business goals.',
    ],
  },
  {
    id: 'remote-monitoring',
    title: 'Remote Monitoring and Management',
    chip: 'PROACTIVE SUPERVISION',
    metric: 'CONTINUOUS TELEMETRY',
    accent: '#173B8F',
    image: remoteMonitoringImage,
    paragraphs: [
      'Remote monitoring and management is the process of supervising and controlling IT systems by means of locally installed agents that can be accessed by a management service provider.',
    ],
    functionsIntro: 'Functions include the ability to:',
    functions: [
      'Install new or updated software remotely (including patches, updates and configuration changes)',
      'Detect new devices and automatically install the RMM agent and configure the device',
      'Observe the behavior of the managed device and software for performance and diagnostic tasks',
      'Perform alerting and provide reports and dashboards',
    ],
    concludingParagraph:
      'Remote system monitoring services are a modern approach to IT maintenance and support and of utmost importance to prevent the risk of downtime as a downtime can cause the entire system to collapse.',
  },
];

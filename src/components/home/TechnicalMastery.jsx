import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { expertServices } from '../../data/services';
import iconLogo from '../../assets/icons/favicon.png';
import './technicalMastery.css';

export default function TechnicalMastery() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-10% 0px' });
  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="technical-mastery editorial-block"
      aria-labelledby="technical-mastery-title"
    >
      <div className="container technical-mastery__layout">
        <div className="technical-mastery__copy">
          <motion.span
            className="technical-mastery__eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          >
            Technical Mastery
          </motion.span>
          <div className="technical-mastery__heading-clip">
            <motion.h2
              id="technical-mastery-title"
              className="editorial-main-heading technical-mastery__heading"
              initial={{ opacity: 0, y: 24, clipPath: 'inset(0 0 100% 0)' }}
              animate={inView ? { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' } : {}}
              transition={{ delay: 0.08, duration: reduceMotion ? 0 : 0.45, ease: [0.2, 0.7, 0.2, 1] }}
            >
              Our Expertised Services
            </motion.h2>
          </div>
          <motion.p
            className="editorial-main-desc technical-mastery__description"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: reduceMotion ? 0 : 0.35 }}
          >
            End-to-end capabilities spanning custom sensor hardware, embedded firmware, predictive data analytics, and deployment scalability.
          </motion.p>
        </div>

        <EngineeringBlueprint
          services={expertServices}
          inView={inView}
          reduceMotion={reduceMotion}
        />
        <Link to="/services" className="btn btn--primary technical-mastery__services-link">
          <span>Explore All Services</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

function EngineeringBlueprint({ services, inView, reduceMotion }) {
  const [activeService, setActiveService] = useState(services[0]?.id ?? null);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const indicatorRefs = useRef([]);
  const portRefs = useRef([]);
  const [svgSize, setSvgSize] = useState({ width: 800, height: 520 });
  const [lines, setLines] = useState(() =>
    services.map((_, index) => ({
      startX: 286,
      startY: 68 + index * 105,
      endX: 468,
      endY: [135, 205, 290, 365][index] || 135,
    }))
  );

  const serviceLayoutMap = {
    'it-audit': { node: { x: 572, y: 222 } },
    'managed-security': { node: { x: 658, y: 222 } },
    'managed-network': { node: { x: 572, y: 308 } },
    'managed-cloud': { node: { x: 658, y: 308 } },
  };

  const serviceVisuals = services.map((service, index) => {
    const layout = serviceLayoutMap[service.id] ?? {
      node: {
        x: [572, 658, 572, 658][index] ?? 572,
        y: [222, 222, 308, 308][index] ?? 222,
      },
    };

    return {
      ...service,
      node: layout.node,
    };
  });

  const updateConnections = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    if (containerRect.width === 0 || containerRect.height === 0) return;

    const newLines = services.map((_, index) => {
      const cardEl = cardRefs.current[index];
      const portEl = portRefs.current[index];
      const indicatorEl = indicatorRefs.current[index];

      let startX = 286;
      let startY = 68 + index * 105;
      let endX = 468;
      let endY = [135, 205, 290, 365][index] || 135;

      if (cardEl && portEl) {
        const cardRect = cardEl.getBoundingClientRect();
        const portRect = portEl.getBoundingClientRect();
        const indicatorRect = indicatorEl ? indicatorEl.getBoundingClientRect() : null;

        startX = indicatorRect
          ? indicatorRect.right - containerRect.left
          : cardRect.right - containerRect.left;
        startY = indicatorRect
          ? indicatorRect.top + indicatorRect.height / 2 - containerRect.top
          : cardRect.top + cardRect.height / 2 - containerRect.top;

        endX = portRect.left + portRect.width / 2 - containerRect.left;
        endY = portRect.top + portRect.height / 2 - containerRect.top;
      }

      return { startX, startY, endX, endY };
    });

    setSvgSize({ width: containerRect.width, height: containerRect.height });
    setLines(newLines);
  };

  React.useEffect(() => {
    updateConnections();

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateConnections);
    }

    const ro = new ResizeObserver(() => {
      updateConnections();
    });

    if (containerRef.current) {
      ro.observe(containerRef.current);
    }

    window.addEventListener('resize', updateConnections);
    const t1 = setTimeout(updateConnections, 60);
    const t2 = setTimeout(updateConnections, 300);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateConnections);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [services]);

  const currentDetails = activeService
    ? (services.find((service) => service.id === activeService) ?? services[0])
    : { title: 'Our Expertised Services' };

  return (
    <div
      ref={containerRef}
      className={`engineering-blueprint ${inView ? 'is-visible' : ''} ${reduceMotion ? 'reduce-motion' : ''} ${activeService ? 'has-active-service' : ''}`}
      aria-label="Interactive engineering blueprint showing our expert managed services operations platform"
      onPointerLeave={() => setActiveService(null)}
    >

      <motion.div
        className="engineering-blueprint__grid"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.35, duration: reduceMotion ? 0 : 0.35 }}
        aria-hidden="true"
      />
      {!reduceMotion && <div className="engineering-blueprint__scan" aria-hidden="true" />}

      {/* ── 4 Dynamic Connection Lines from 4 Content Cards to 4 Figure Ports ── */}
      <svg
        className="engineering-blueprint__connectors-svg"
        viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g className="engineering-blueprint__traces">
          {lines.map((line, index) => {
            const service = services[index];
            const active = activeService === service?.id;
            const dx = line.endX - line.startX;
            const c1X = line.startX + Math.max(dx * 0.4, 20);
            const c2X = line.startX + Math.max(dx * 0.6, 30);
            const pathD = `M ${line.startX} ${line.startY} H ${line.startX + 12} C ${c1X} ${line.startY}, ${c2X} ${line.endY}, ${line.endX} ${line.endY}`;

            return (
              <g key={service?.id || index} className={active ? 'is-active' : ''}>
                <motion.path
                  d={pathD}
                  initial={{ pathLength: 0, opacity: 0.3 }}
                  animate={inView ? { pathLength: 1, opacity: activeService ? (active ? 1 : 0.35) : 0.75 } : {}}
                  transition={{ delay: 0.53 + index * 0.08, duration: reduceMotion ? 0 : 0.42, ease: 'easeOut' }}
                  className="engineering-blueprint__trace"
                />
                <motion.circle
                  cx={line.startX}
                  cy={line.startY}
                  r={active ? 5 : 3.5}
                  animate={inView ? { opacity: 1, scale: active ? 1.15 : 1 } : { opacity: 0 }}
                  transition={{ delay: 0.74 + index * 0.08, duration: reduceMotion ? 0 : 0.22 }}
                  className="engineering-blueprint__junction"
                />
              </g>
            );
          })}
        </g>
      </svg>

      <svg
        className="engineering-blueprint__drawing"
        viewBox="0 0 800 520"
        preserveAspectRatio="xMaxYMid meet"
        aria-hidden="true"
      >
        <g className="engineering-blueprint__construction">
          <path d="M24 35h22M24 35v22M776 35h-22M776 35v22M24 485h22M24 485v-22M776 485h-22M776 485v-22" />
          <path d="M430 44v14m8-14v8m8-8v14m8-14v8m8-8v14m8-14v8m8-8v14" />
          <path d="M448 474v-14m8 14v-8m8 8v-14m8 14v-8m8 8v-14m8 14v-8m8 8v-14" />
          <circle cx="455" cy="260" r="146" />
          <circle cx="455" cy="260" r="132" />
          <path d="M455 105v22m0 266v22M300 260h22m266 0h22" />
        </g>

        {/* ── 4 Ports on Figure ── */}
        <g className="engineering-blueprint__port-lights">
          {[135, 205, 290, 365].map((portY, index) => (
            <circle
              key={index}
              ref={(el) => (portRefs.current[index] = el)}
              cx="468"
              cy={portY}
              r="4"
              className={`engineering-blueprint__port-light ${activeService === services[index]?.id ? 'is-active' : ''}`}
            />
          ))}
        </g>

        {/* ── SERVICES OPERATIONS PLATFORM (Interactive Vector Console) ── */}
        <motion.g
          className={`engineering-core ${activeService ? 'is-active' : ''}`}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.76, duration: reduceMotion ? 0 : 0.38, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {/* Main Enclosure Housing */}
          <rect x="476" y="65" width="278" height="380" rx="14" className="engineering-core__housing" />
          <rect x="488" y="77" width="254" height="356" rx="10" className="engineering-core__inner" />

          {/* Connectors on left & right rails */}
          <path d="M476 135h-8m8 70h-8m8 85h-8m8 75h-8" className="engineering-core__connectors" />
          <path d="M754 135h8m-8 70h8m-8 85h8m-8 75h8" className="engineering-core__connectors" />

          {/* Top Header Plate with Service Name */}
          <rect x="495" y="88" width="240" height="36" rx="7" className="engineering-core__label-plate" />
          <circle cx="515" cy="106" r="4.5" className="engineering-core__status-light" />
          <text x="530" y="111" className="engineering-core__label">{currentDetails.title}</text>

          {/* Center Dynamic Services Interconnect Matrix */}
          <g className="engineering-core__matrix-group">
            {/* Outer Orbit Rings */}
            <circle cx="615" cy="265" r="92" className="engineering-core__sensor-ring" />
            <circle cx="615" cy="265" r="70" className="engineering-core__sensor-ring engineering-core__sensor-ring--inner" />
            <circle cx="615" cy="265" r="48" className="engineering-core__sensor-core" />
            
            {/* Matrix Crosshairs & Telemetry Ticks */}
            <path d="M615 173v22m0 140v22m-92-92h22m140 0h22" className="engineering-core__ticks" />
            <path d="M550 200l16 16m98 98l16 16m0-130l-16 16m-98 98l-16 16" className="engineering-core__ticks" />

            {/* 4 Quadrant Service Nodes */}
            {serviceVisuals.map((service) => (
              <circle
                key={service.id}
                cx={service.node.x}
                cy={service.node.y}
                r="5"
                fill={activeService === service.id ? '#087DB9' : '#94A3B8'}
              />
            ))}

            {/* Central Core Animated Icon Logo */}
            <circle cx="615" cy="265" r="34" className="engineering-core__logo-backdrop" />
            <circle cx="615" cy="265" r="34" className="engineering-core__logo-glow-ring" />
            <image
              href={iconLogo}
              x="587"
              y="237"
              width="56"
              height="56"
              preserveAspectRatio="xMidYMid meet"
              className="engineering-core__logo-icon"
            />
          </g>

          {/* Circuit Lines */}
          <path d="M502 405h60m10 0h55m10 0h60" className="engineering-core__circuit" />
          <circle cx="502" cy="405" r="3" className="engineering-core__micro-node" />
          <circle cx="572" cy="405" r="3" className="engineering-core__micro-node" />
          <circle cx="637" cy="405" r="3" className="engineering-core__micro-node" />
          <circle cx="707" cy="405" r="3" className="engineering-core__micro-node" />
        </motion.g>
      </svg>

      <div className="engineering-blueprint__services" role="group" aria-label="Engineering services">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.82 + index * 0.09, duration: reduceMotion ? 0 : 0.24 }}
          >
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className={`engineering-service ${activeService === service.id ? 'is-active' : ''}`}
              onPointerEnter={() => setActiveService(service.id)}
              onPointerLeave={() => setActiveService(null)}
              onFocus={() => setActiveService(service.id)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setActiveService(null);
              }}
            >
              <span className="engineering-service__copy">
                <span className="engineering-service__title">{service.title}</span>
                <span className="engineering-service__description">{service.description}</span>
              </span>
              <span
                ref={(el) => (indicatorRefs.current[index] = el)}
                className="engineering-service__indicator"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="engineering-blueprint__scale" aria-hidden="true" />
    </div>
  );
}

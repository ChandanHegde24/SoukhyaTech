import React, { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { expertServices } from '../../data/siteContent';
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
      </div>
    </section>
  );
}

function EngineeringBlueprint({ services, inView, reduceMotion }) {
  const [activeService, setActiveService] = useState(null);

  return (
    <div
      className={`engineering-blueprint ${inView ? 'is-visible' : ''} ${reduceMotion ? 'reduce-motion' : ''} ${activeService ? 'has-active-service' : ''}`}
      aria-label="Interactive engineering blueprint showing our service capabilities connected to an industrial control module"
      onPointerLeave={() => setActiveService(null)}
    >
      <div className="engineering-blueprint__meta" aria-hidden="true">
        <span>ENGINEERING / SYSTEMS</span>
        <span>FIG. 01</span>
      </div>

      <motion.div
        className="engineering-blueprint__grid"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.35, duration: reduceMotion ? 0 : 0.35 }}
        aria-hidden="true"
      />
      {!reduceMotion && <div className="engineering-blueprint__scan" aria-hidden="true" />}

      <svg
        className="engineering-blueprint__drawing"
        viewBox="0 0 800 520"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g className="engineering-blueprint__construction">
          <path d="M24 35h22M24 35v22M776 35h-22M776 35v22M24 485h22M24 485v-22M776 485h-22M776 485v-22" />
          <path d="M430 44v14m8-14v8m8-8v14m8-14v8m8-8v14m8-14v8m8-8v14" />
          <path d="M448 474v-14m8 14v-8m8 8v-14m8 14v-8m8 8v-14m8 14v-8m8 8v-14" />
          <circle cx="465" cy="260" r="146" />
          <circle cx="465" cy="260" r="132" />
          <path d="M465 105v22m0 266v22M310 260h22m266 0h22" />
        </g>

        <g className="engineering-blueprint__traces">
          {services.map((service, index) => {
            const startY = 86 + index * 108;
            const portY = [188, 222, 288, 322][index];
            const active = activeService === service.id;
            return (
              <g key={service.id} className={active ? 'is-active' : ''}>
                <motion.path
                  d={`M286 ${startY} H350 C398 ${startY} 414 ${portY} 476 ${portY}`}
                  initial={{ pathLength: 0, opacity: 0.3 }}
                  animate={inView ? { pathLength: 1, opacity: activeService ? (active ? 1 : 0.42) : 0.8 } : {}}
                  transition={{ delay: 0.53 + index * 0.08, duration: reduceMotion ? 0 : 0.42, ease: 'easeOut' }}
                  className="engineering-blueprint__trace"
                />
                <motion.circle
                  cx="286"
                  cy={startY}
                  r={active ? 4.5 : 3}
                  animate={inView ? { opacity: 1, scale: active ? 1.1 : 1 } : { opacity: 0 }}
                  transition={{ delay: 0.74 + index * 0.08, duration: reduceMotion ? 0 : 0.22 }}
                  className="engineering-blueprint__junction"
                />
                <circle cx="476" cy={portY} r="3.5" className="engineering-blueprint__port-light" />
              </g>
            );
          })}
        </g>

        <motion.g
          className={`engineering-core ${activeService ? 'is-active' : ''}`}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.76, duration: reduceMotion ? 0 : 0.38, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <rect x="488" y="139" width="254" height="242" rx="14" className="engineering-core__housing" />
          <rect x="501" y="152" width="228" height="216" rx="9" className="engineering-core__inner" />
          <path d="M488 188h-12m12 34h-12m12 66h-12m12 34h-12" className="engineering-core__connectors" />
          <path d="M742 188h12m-12 34h12m-12 66h12m-12 34h12" className="engineering-core__connectors" />
          <rect x="526" y="175" width="178" height="24" rx="4" className="engineering-core__label-plate" />
          <text x="538" y="191" className="engineering-core__label">INDUSTRIAL CONTROL MODULE</text>
          <circle cx="615" cy="267" r="57" className="engineering-core__sensor-ring" />
          <circle cx="615" cy="267" r="43" className="engineering-core__sensor-ring engineering-core__sensor-ring--inner" />
          <circle cx="615" cy="267" r="28" className="engineering-core__sensor-core" />
          <circle cx="615" cy="267" r="6" className="engineering-core__sensor-point" />
          <path d="M615 210v17m0 80v17m-57-57h17m80 0h17m-97-40 12 12m56 56 12 12m0-80-12 12m-56 56-12 12" className="engineering-core__ticks" />
          <path d="M526 333h35m8 0h18m8 0h26m8 0h39" className="engineering-core__circuit" />
          <circle cx="526" cy="333" r="3" className="engineering-core__micro-node" />
          <circle cx="660" cy="333" r="3" className="engineering-core__micro-node" />
          <circle cx="704" cy="333" r="3" className="engineering-core__micro-node" />
          <circle cx="518" cy="164" r="2.5" className="engineering-core__status-light" />
          <circle cx="529" cy="164" r="2.5" className="engineering-core__status-light engineering-core__status-light--secondary" />
        </motion.g>
      </svg>

      <div className="engineering-blueprint__services" role="group" aria-label="Engineering services">
        {services.map((service, index) => (
          <motion.button
            key={service.id}
            type="button"
            className={`engineering-service ${activeService === service.id ? 'is-active' : ''}`}
            onPointerEnter={() => setActiveService(service.id)}
            onFocus={() => setActiveService(service.id)}
            onBlur={(event) => {
              if (!event.currentTarget.parentElement.contains(event.relatedTarget)) setActiveService(null);
            }}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.82 + index * 0.09, duration: reduceMotion ? 0 : 0.24 }}
          >
            <span className="engineering-service__number">0{index + 1}</span>
            <span className="engineering-service__copy">
              <span className="engineering-service__title">{service.title}</span>
              <span className="engineering-service__description">{service.description}</span>
            </span>
            <span className="engineering-service__indicator" aria-hidden="true" />
          </motion.button>
        ))}
      </div>

      <div className="engineering-blueprint__scale" aria-hidden="true">
        <span>DEVICE</span><i /><span>EDGE</span><i /><span>INTELLIGENCE</span>
      </div>
    </div>
  );
}

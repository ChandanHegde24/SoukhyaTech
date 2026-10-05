import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import './ConnectedIntelligence.css';

export default function ConnectedIntelligence() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-10% 0px' });
  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="connected-intel"
      aria-labelledby="connected-intel-statement"
    >
      {/* Decorative Technical Background Elements */}
      <div className="connected-intel__bg-decorations" aria-hidden="true">
        <div className="connected-intel__grid-canvas" />
        <div className="connected-intel__glow-left" />
        <div className="connected-intel__glow-right" />
      </div>

      <div className="container connected-intel__container">
        {/* Statement Content Sitting Directly on Rich Background */}
        <div className="connected-intel__statement">
          <motion.p
            id="connected-intel-statement"
            className="connected-intel__text"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: reduceMotion ? 0 : 0.12,
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            We engineer integrated IoT and IIoT platforms that bring devices, data, and decision intelligence together. Our goal is to improve operational efficiency, enable predictive insights, and support meaningful digital transformation across industries.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

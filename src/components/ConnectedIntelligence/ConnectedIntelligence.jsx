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
      aria-labelledby="connected-intel-eyebrow"
    >
      <div className="container connected-intel__container">
        {/* Subtle Eyebrow Label */}
        <motion.div
          className="connected-intel__eyebrow-wrap"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="connected-intel__node" aria-hidden="true" />
          <span id="connected-intel-eyebrow" className="connected-intel__eyebrow">
            CONNECTED INTELLIGENCE
          </span>
          <span className="connected-intel__rule" aria-hidden="true" />
        </motion.div>

        {/* Clean Editorial Statement Content */}
        <div className="connected-intel__statement">
          {/* Sentence 1: Primary Editorial Weight */}
          <motion.p
            className="connected-intel__sentence-lead"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: reduceMotion ? 0 : 0.15,
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            We engineer integrated{' '}
            <span className="intel-kw intel-kw--blue">IoT</span> and{' '}
            <span className="intel-kw intel-kw--indigo">IIoT</span> platforms that bring{' '}
            <span className="intel-kw intel-kw--underline-blue">devices</span>,{' '}
            <span className="intel-kw intel-kw--underline-green">data</span>, and{' '}
            <span className="intel-kw intel-kw--gradient">decision intelligence</span>{' '}
            together.
          </motion.p>

          {/* Sentence 2: Secondary Visual Hierarchy */}
          <motion.p
            className="connected-intel__sentence-body"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: reduceMotion ? 0 : 0.3,
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Our goal is to improve{' '}
            <span className="intel-kw intel-kw--indigo">operational efficiency</span>, enable{' '}
            <span className="intel-kw intel-kw--blue">predictive insights</span>, and support
            meaningful{' '}
            <span className="intel-kw intel-kw--dark">digital transformation</span> across
            industries.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

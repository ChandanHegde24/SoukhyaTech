import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './IntelligenceFlow.css';

const stages = [
  {
    number: '01',
    id: 'monitoring',
    label: 'MONITORING',
    color: 'var(--green)',
    title: 'Continuous 24x7 Grounding Supervision',
    description:
      'I-ES connects directly to electrical earthing infrastructure to provide non-stop, automated telemetry across installations without requiring intermittent manual testing.',
  },
  {
    number: '02',
    id: 'analysis',
    label: 'ANALYSIS',
    color: 'var(--brand-blue)',
    title: 'Resistance, Current & Voltage Tracking',
    description:
      'Continuously measures and evaluates critical earthing parameters in real time — tracking earth resistance values, leakage currents, and voltage potential fluctuations.',
  },
  {
    number: '03',
    id: 'identification',
    label: 'DETECTION',
    color: 'var(--brand-indigo)',
    title: 'Advance Fault Identification & Anomaly Detection',
    description:
      'Diagnostic intelligence evaluates parameter trends to identify grounding degradation, soil resistance shifts, and leakage spikes well before they become critical hazards.',
  },
  {
    number: '04',
    id: 'alerts',
    label: 'WARNING',
    color: 'var(--orange)',
    title: 'Early Warnings & Immediate Notifications',
    description:
      'Automated multi-channel alerts notify engineering teams the moment thresholds are breached, pinpointing exact Earth Pit locations requiring attention.',
  },
  {
    number: '05',
    id: 'safety',
    label: 'PROTECTION',
    color: 'var(--cyan-accent)',
    title: 'Safer Operations, Reduced Costs & Asset Longevity',
    description:
      'Supports timely rectification to manage the end-to-end lifecycle of Earth Pits, drastically reducing unplanned downtime, replacement costs, and hazard risks for personnel and electrical assets.',
  },
];

export default function IntelligenceFlow() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section className="intel-flow section section--bg" ref={ref} aria-labelledby="intel-flow-title">
      <div className="grid-bg" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="intel-flow__header text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">I-ES Operational Lifecycle</span>
          <h2 id="intel-flow-title" className="heading-xl">
            Connected Intelligence Story
          </h2>
          <p className="intel-flow__subtitle body-muted mx-auto">
            I-ES brings intelligent, real-time monitoring to electrical grounding systems, continuously tracking resistance, current, and voltage parameters to identify potential faults before they become critical. With 24x7 monitoring, early warnings, and immediate alerts, I-ES helps improve the reliability, safety, and operating life of Earth Pits while reducing downtime and replacement costs.
          </p>
        </motion.div>

        <div className="intel-flow__track">
          {/* Connecting vertical line */}
          <div className="intel-flow__line" aria-hidden="true">
            <motion.div
              className="intel-flow__line-progress"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {stages.map((stage, i) => (
            <StageCard key={stage.id} stage={stage} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StageCard({ stage, index, inView }) {
  const isRight = index % 2 === 1;

  return (
    <motion.div
      className={`intel-flow__stage ${isRight ? 'intel-flow__stage--right' : ''}`}
      initial={{ opacity: 0, x: isRight ? 40 : -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.18, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Node */}
      <div className="intel-flow__node" style={{ '--stage-color': stage.color }} aria-hidden="true">
        <div className="intel-flow__node-ring" />
        <div className="intel-flow__node-dot" />
        <span className="intel-flow__node-label">{stage.label}</span>
      </div>

      {/* Card */}
      <div className="intel-flow__card">
        <div className="intel-flow__card-number" style={{ color: stage.color }}>
          {stage.number}
        </div>
        <h3 className="intel-flow__card-title">{stage.title}</h3>
        <p className="intel-flow__card-desc">{stage.description}</p>
        <div className="intel-flow__card-bar" style={{ background: stage.color }} aria-hidden="true" />
      </div>
    </motion.div>
  );
}

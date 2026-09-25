import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './IntelligenceFlow.css';

const stages = [
  {
    number: '01',
    id: 'sense',
    label: 'SENSE',
    color: 'var(--green)',
    title: 'Sensors & Devices Collect Real-World Signals',
    description:
      'Industrial sensors, IoT devices, and embedded systems continuously capture physical data — temperature, pressure, current, vibration, and position — from the environment.',
  },
  {
    number: '02',
    id: 'connect',
    label: 'CONNECT',
    color: 'var(--brand-blue)',
    title: 'Devices Communicate Through Connected Infrastructure',
    description:
      'Data flows securely through edge nodes, gateways, and network layers — from device to cloud via managed, reliable connectivity designed for industrial scale.',
  },
  {
    number: '03',
    id: 'understand',
    label: 'UNDERSTAND',
    color: 'var(--brand-indigo)',
    title: 'Data Becomes Analytics, Insights, and Operational Intelligence',
    description:
      'Raw streams are transformed into dashboards, anomaly alerts, predictive models, and KPI reports — giving teams full operational visibility across their environments.',
  },
  {
    number: '04',
    id: 'act',
    label: 'ACT',
    color: 'var(--orange)',
    title: 'Teams Receive Alerts, Decisions, and Actionable Outcomes',
    description:
      'Automated notifications, incident responses, maintenance schedules, and real-time directives enable faster, more confident operational decisions around the clock.',
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
          <span className="eyebrow">Connected Intelligence Story</span>
          <h2 id="intel-flow-title" className="heading-xl">
            From Raw Physical Signal to&nbsp;
            <span className="text-brand-blue">Automated Decision</span>
          </h2>
          <p className="intel-flow__subtitle body-muted mx-auto">
            A continuous, intelligent loop unifying field devices, edge computing, telemetry transmission, and executive decisions.
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

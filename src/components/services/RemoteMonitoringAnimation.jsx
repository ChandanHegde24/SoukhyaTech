import React from 'react';

/* ============================================================
   REMOTE MONITORING & MANAGEMENT: 5-STAGE WORKFLOW ANIMATION
   Discover -> Deploy -> Monitor -> Alert -> Report
   ============================================================ */
export default function RemoteMonitoringAnimation() {
  return (
    <svg className="service-anim-svg rmm-anim" viewBox="0 0 720 460" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {/* Central Screen Refresh Telemetry Scanline */}
      <g className="rmm-console-scan" transform="translate(360, 230)">
        <rect x="-42" y="-28" width="84" height="56" rx="6" className="rmm-screen-frame" />
        <line x1="-38" y1="-24" x2="38" y2="-24" className="rmm-screen-scanline" />
      </g>

      {/* Flow Connectors to the 5 Functional Pillars */}
      <path d="M 360,230 L 220,130" className="rmm-path path-discover" />
      <path d="M 360,230 L 500,130" className="rmm-path path-deploy" />
      <path d="M 360,230 L 500,330" className="rmm-path path-monitor" />
      <path d="M 360,230 L 220,330" className="rmm-path path-alert" />

      {/* STAGE 1: Device Discovery & Agent Deployment */}
      <g className="rmm-node node-discover" transform="translate(220, 130)">
        <circle r="24" className="rmm-node-ring" />
      </g>

      {/* STAGE 2: Remote Software Deployment */}
      <g className="rmm-node node-deploy" transform="translate(500, 130)">
        <circle r="24" className="rmm-node-ring" />
      </g>

      {/* STAGE 3: Performance Monitoring & Diagnostics */}
      <g className="rmm-node node-perf" transform="translate(500, 330)">
        <circle r="24" className="rmm-node-ring" />
      </g>

      {/* STAGE 4: Alerting & Notifications (Green Resolved Ping) */}
      <g className="rmm-node node-alert node--resolved" transform="translate(220, 330)">
        <circle r="25" className="rmm-node-ring" />
      </g>

      {/* STAGE 5: Reports & Dashboards (Live mini equalizer telemetry) */}
      <g className="rmm-node node-report" transform="translate(360, 370)">
        <circle r="22" className="rmm-node-ring" />
        <line x1="-5" y1="5" x2="-5" y2="-5" className="rmm-mini-bar bar-1" />
        <line x1="0" y1="7" x2="0" y2="-8" className="rmm-mini-bar bar-2" />
        <line x1="5" y1="4" x2="5" y2="-4" className="rmm-mini-bar bar-3" />
      </g>
    </svg>
  );
}

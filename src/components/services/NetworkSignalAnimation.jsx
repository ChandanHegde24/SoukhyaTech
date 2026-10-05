import React from 'react';

/* ============================================================
   MANAGED NETWORK SERVICES: NETWORK SIGNAL & TRAFFIC FLOW
   Soft signal sweeps along existing connection paths + Wi-Fi broadcast
   ============================================================ */
export default function NetworkSignalAnimation() {
  return (
    <svg className="service-anim-svg network-anim" viewBox="0 0 720 648" preserveAspectRatio="none" aria-hidden="true">
      {/* Existing Network Connection Circuit Paths */}
      {/* These endpoints follow the six service logos in the source infographic. */}
      <path d="M 360,324 L 225,130" className="net-signal-path path-sdwan" />
      <path d="M 360,324 L 495,130" className="net-signal-path path-router" />
      <path d="M 360,324 L 612,320" className="net-signal-path path-wifi" />
      <path d="M 360,324 L 108,320" className="net-signal-path path-switch" />
      <path d="M 360,324 L 225,520" className="net-signal-path path-wanopt" />
      <path d="M 360,324 L 495,520" className="net-signal-path path-firewall net-path--active" />

      {/* Central Hub Signal Pulse */}
      <circle cx="360" cy="324" r="38" className="net-hub-aura" />

      {/* Service logo anchor points */}
      <g className="net-node-hl node-router" transform="translate(495, 130)">
        <circle r="22" className="net-node-highlight" />
      </g>
      <g className="net-node-hl node-switch" transform="translate(108, 320)">
        <circle r="22" className="net-node-highlight" />
      </g>
      <g className="net-node-hl node-firewall node--active" transform="translate(495, 520)">
        <circle r="24" className="net-node-highlight" />
      </g>
    </svg>
  );
}

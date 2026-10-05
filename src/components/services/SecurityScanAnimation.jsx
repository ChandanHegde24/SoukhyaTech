import React from 'react';

/* ============================================================
   MANAGED SECURITY SERVICES: SECURITY SCAN & PROTECTION SCAN
   Soft expanding protection scan ring activating security sentinels
   ============================================================ */
export default function SecurityScanAnimation() {
  return (
    <svg className="service-anim-svg security-anim" viewBox="0 0 720 460" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {/* Central Security Shield Core Breathing Aura */}
      <circle cx="360" cy="230" r="46" className="sec-shield-aura" />

      {/* Smooth Scanning Wave propagating to protection layers */}
      <circle cx="360" cy="230" r="60" className="sec-scan-wave wave-1" />
      <circle cx="360" cy="230" r="110" className="sec-scan-wave wave-2" />
      <circle cx="360" cy="230" r="160" className="sec-scan-wave wave-3" />

      {/* Security Nodes Reached by Protection Scan */}
      {/* Node 1: Perimeter Firewall (Top) */}
      <g className="sec-node sec-node-1" transform="translate(360, 80)">
        <circle r="24" className="sec-node-ring" />
      </g>
      {/* Node 2: Threat Analytics (Top-Right) */}
      <g className="sec-node sec-node-2" transform="translate(510, 145)">
        <circle r="24" className="sec-node-ring" />
      </g>
      {/* Node 3: 24/7 SOC / SIEM (Bottom-Right - Green Active Secure) */}
      <g className="sec-node sec-node-3 sec-node--secure" transform="translate(490, 325)">
        <circle r="26" className="sec-node-ring" />
      </g>
      {/* Node 4: Endpoint Defense (Bottom-Left) */}
      <g className="sec-node sec-node-4" transform="translate(230, 325)">
        <circle r="24" className="sec-node-ring" />
      </g>
      {/* Node 5: Cloud Posture (Top-Left) */}
      <g className="sec-node sec-node-5" transform="translate(210, 145)">
        <circle r="24" className="sec-node-ring" />
      </g>
    </svg>
  );
}

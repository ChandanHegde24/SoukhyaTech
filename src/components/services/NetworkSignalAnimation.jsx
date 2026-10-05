import React from 'react';

/* ============================================================
   MANAGED NETWORK SERVICES: NETWORK SIGNAL & TRAFFIC FLOW
   Soft signal sweeps along existing connection paths + Wi-Fi broadcast
   ============================================================ */
export default function NetworkSignalAnimation() {
  return (
    <svg className="service-anim-svg network-anim" viewBox="0 0 720 460" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {/* Existing Network Connection Circuit Paths */}
      {/* Center to SD-WAN (Top-Left) */}
      <path d="M 360,230 L 230,125" className="net-signal-path path-sdwan" />
      {/* Center to Router (Top) */}
      <path d="M 360,230 L 360,90" className="net-signal-path path-router" />
      {/* Center to Wi-Fi (Top-Right) */}
      <path d="M 360,230 L 490,125" className="net-signal-path path-wifi" />
      {/* Center to Switch (Bottom-Right) */}
      <path d="M 360,230 L 490,335" className="net-signal-path path-switch" />
      {/* Center to WAN Optimisation (Bottom) */}
      <path d="M 360,230 L 360,370" className="net-signal-path path-wanopt" />
      {/* Center to Firewall (Bottom-Left - Active Green Stream) */}
      <path d="M 360,230 L 230,335" className="net-signal-path path-firewall net-path--active" />

      {/* Central Hub Signal Pulse */}
      <circle cx="360" cy="230" r="38" className="net-hub-aura" />

      {/* Wi-Fi Node (490, 125) Subtle Signal Arcs */}
      <g className="net-wifi-waves" transform="translate(490, 125)">
        <circle r="22" className="net-node-highlight" />
        <path d="M -12,-16 A 20,20 0 0,1 12,-16" className="net-wifi-arc arc-1" fill="none" />
        <path d="M -18,-22 A 28,28 0 0,1 18,-22" className="net-wifi-arc arc-2" fill="none" />
      </g>

      {/* Router Node (360, 90) */}
      <g className="net-node-hl node-router" transform="translate(360, 90)">
        <circle r="22" className="net-node-highlight" />
      </g>

      {/* Switch Node (490, 335) */}
      <g className="net-node-hl node-switch" transform="translate(490, 335)">
        <circle r="22" className="net-node-highlight" />
      </g>

      {/* Firewall Node (230, 335 - Green Protected State) */}
      <g className="net-node-hl node-firewall node--active" transform="translate(230, 335)">
        <circle r="24" className="net-node-highlight" />
      </g>
    </svg>
  );
}

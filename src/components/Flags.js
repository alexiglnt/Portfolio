import React from "react";

// Petit drapeau US en SVG (les emojis drapeaux ne s'affichent pas sous Windows)
export function UsFlag({ className = "exp-card__flag" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 26 14"
      width="19"
      height="13"
      role="img"
      aria-label="États-Unis"
    >
      <rect width="26" height="14" fill="#b22234" />
      <g fill="#fff">
        <rect y="1.08" width="26" height="1.08" />
        <rect y="3.23" width="26" height="1.08" />
        <rect y="5.38" width="26" height="1.08" />
        <rect y="7.54" width="26" height="1.08" />
        <rect y="9.69" width="26" height="1.08" />
        <rect y="11.85" width="26" height="1.08" />
      </g>
      <rect width="11" height="7.54" fill="#3c3b6e" />
      <g fill="#fff">
        <circle cx="1.8" cy="1.5" r="0.5" />
        <circle cx="4.4" cy="1.5" r="0.5" />
        <circle cx="7" cy="1.5" r="0.5" />
        <circle cx="9.6" cy="1.5" r="0.5" />
        <circle cx="3.1" cy="3.1" r="0.5" />
        <circle cx="5.7" cy="3.1" r="0.5" />
        <circle cx="8.3" cy="3.1" r="0.5" />
        <circle cx="1.8" cy="4.7" r="0.5" />
        <circle cx="4.4" cy="4.7" r="0.5" />
        <circle cx="7" cy="4.7" r="0.5" />
        <circle cx="9.6" cy="4.7" r="0.5" />
        <circle cx="3.1" cy="6.2" r="0.5" />
        <circle cx="5.7" cy="6.2" r="0.5" />
        <circle cx="8.3" cy="6.2" r="0.5" />
      </g>
    </svg>
  );
}

// Drapeaux disponibles, par code pays (champ "flag" des JSON)
export const FLAGS = { us: UsFlag };

import React, { useRef } from "react";

function ExperienceCard({ title, company, date, description, location, logo }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1) + "%";
    const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1) + "%";
    glow.style.background = `radial-gradient(circle at ${x} ${y}, rgba(120,80,255,0.16), transparent 65%)`;
    glow.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <div
      className="exp-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="exp-card__glow" ref={glowRef} />

      {/* Header : titre + logo */}
      <div className="exp-card__header">
        <div className="exp-card__header-left">
          <h3 className="exp-card__title">{title}</h3>
          <div className="exp-card__meta">
            <span className="exp-card__company">{company}</span>
            <span className="exp-card__date">{date}</span>
          </div>
        </div>
        {logo && (
          <div className="exp-card__logo-wrapper">
            <img src={logo} alt={company} className="exp-card__logo" />
          </div>
        )}
      </div>

      <div className="exp-card__divider" />

      {/* Description */}
      <div className="exp-card__body">
        {Array.isArray(description)
          ? description.map((item, i) => (
              <p key={i} className="exp-card__desc">{item}</p>
            ))
          : <p className="exp-card__desc">{description}</p>
        }
      </div>

      {/* Footer : localisation */}
      {location && (
        <div className="exp-card__footer">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span className="exp-card__location">{location}</span>
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
import React, { useEffect, useRef, useState } from "react";

// Petit drapeau US en SVG (les emojis drapeaux ne s'affichent pas sous Windows)
function UsFlag() {
  return (
    <svg
      className="exp-card__flag"
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

const FLAGS = { us: UsFlag };

function ExperienceCard({
  side = "left",
  title,
  company,
  date,
  description,
  location,
  flag,
  logo,
  logoFrame,
  tags,
  current,
  badgeCurrent,
}) {
  const FlagIcon = flag ? FLAGS[flag] : null;
  const rowRef = useRef(null);
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // 🔹 Révélation au scroll : la carte glisse depuis son côté quand elle entre à l'écran
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
      ref={rowRef}
      className={
        `exp-row exp-row--${side}` +
        (current ? " exp-row--current" : "") +
        (visible ? " is-visible" : "")
      }
    >
      {/* Point sur la ligne centrale */}
      <span className="exp-node" aria-hidden="true" />
      <span className="exp-connector" aria-hidden="true" />

      <div
        className={`exp-card${current ? " exp-card--current" : ""}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="exp-card__glow" ref={glowRef} />

        {/* Header : titre + logo */}
        <div className="exp-card__header">
          <div className="exp-card__header-left">
            {current && badgeCurrent && (
              <span className="exp-card__badge">
                <span className="exp-card__badge-dot" />
                {badgeCurrent}
              </span>
            )}
            <h3 className="exp-card__title">{title}</h3>
            <div className="exp-card__meta">
              <span className="exp-card__company">{company}</span>
              <span className="exp-card__date">{date}</span>
            </div>
          </div>
          {logo && (
            <div
              className={
                "exp-card__logo-wrapper" +
                (logoFrame ? " exp-card__logo-wrapper--framed" : "")
              }
            >
              <img src={logo} alt={company} className="exp-card__logo" />
            </div>
          )}
        </div>

        <div className="exp-card__divider" />

        {/* Description */}
        <div className="exp-card__body">
          {Array.isArray(description) ? (
            description.map((item, i) => (
              <p key={i} className="exp-card__desc">
                {item}
              </p>
            ))
          ) : (
            <p className="exp-card__desc">{description}</p>
          )}
        </div>

        {/* Tags technos */}
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="exp-card__tags">
            {tags.map((tag, i) => (
              <span key={i} className="exp-card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer : localisation */}
        {location && (
          <div className="exp-card__footer">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="exp-card__location">{location}</span>
            {FlagIcon && <FlagIcon />}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;

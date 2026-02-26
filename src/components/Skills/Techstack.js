import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import jsonSkills from "../../jsons/skills.json";
import { useTranslation } from "react-i18next";

function SkillItem({ item }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1) + "%";
    const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1) + "%";
    glow.style.background = `radial-gradient(circle at ${x} ${y}, rgba(120,80,255,0.22), transparent 65%)`;
    glow.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="glass-card skill-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glass-card__glow" ref={glowRef} />
      <img src={item.logo} alt={item.name} className="skill-card__img" />
      <span className="skill-card__name">{item.name}</span>
    </a>
  );
}

function Techstack() {
  const { t } = useTranslation();

  return (
    <>
      {jsonSkills.skills_categories.map((category, idx) => {
        const displayName =
          category.name === "Logiciels / jeux"
            ? t("skills.categories.software_games", "Logiciels / jeux")
            : category.name;

        return (
          <div key={`${displayName}-${idx}`} className="skill-category">
            <h3 className="skill-category__title">{displayName}</h3>
            <Container className="skill-grid">
              {category.skills.map((item) => (
                <SkillItem key={item.name} item={item} />
              ))}
            </Container>
          </div>
        );
      })}
    </>
  );
}

export default Techstack;
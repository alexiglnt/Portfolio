import React, { useRef } from "react";
import { AiOutlineGithub, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function ProjectCards({ data, id }) {
  const { i18n, t } = useTranslation();
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const langParam = i18n.language?.startsWith("en") ? "en" : "fr";
  const detailsHref = `/project/${data.id}?lng=${langParam}`;

  const techList = data.technologies
    ? data.technologies.split(",").map((tech) => tech.trim())
    : [];

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1) + "%";
    const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1) + "%";
    glow.style.background = `radial-gradient(circle at ${x} ${y}, rgba(120,80,255,0.18), transparent 65%)`;
    glow.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  const isEven = id % 2 === 0;

  const imagesBlock = (
    <div className="glass-card__images">
      {data.img1 && (
        <div className="glass-card__img-container glass-card__img-container--main">
          <img src={data.img1} alt={data.name} className="glass-card__img" />
        </div>
      )}
      {(data.img2 || data.img3) && (
        <div className="glass-card__img-container glass-card__img-container--halves">
          {data.img2 && <img src={data.img2} alt={data.name} className="glass-card__img glass-card__img--half" />}
          {data.img3 && <img src={data.img3} alt={data.name} className="glass-card__img glass-card__img--half" />}
        </div>
      )}
    </div>
  );

  const textBlock = (
    <div className="glass-card__content">
      <div className="glass-card__top">
        <span className="glass-card__year">{data.date}</span>
        <span className="glass-card__badge">{data.project_type}</span>
      </div>

      <h2 className="glass-card__title">{data.name}</h2>
      <p className="glass-card__subtitle">{data.description}</p>

      <div className="glass-card__divider" />

      <p className="glass-card__body">{data.but}</p>

      {techList.length > 0 && (
        <div className="glass-card__tech">
          {techList.map((tech) => (
            <span key={tech} className="glass-card__tag">{tech}</span>
          ))}
        </div>
      )}

      <div className="glass-card__footer">
        <a className="glass-card__link" href={detailsHref} target="_blank" rel="noreferrer">
          <AiOutlineFundProjectionScreen style={{ fontSize: "16px" }} />
          {t("labels.more")}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {data.github && (
          <a className="glass-card__github" href={data.github} target="_blank" rel="noreferrer" title="GitHub">
            <AiOutlineGithub style={{ fontSize: "18px" }} />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div
      className="glass-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glass-card__glow" ref={glowRef} />

      {/* DOM toujours : textBlock puis imagesBlock
          CSS gère l'ordre visuel via flex-direction :
          - even → row-reverse : images à gauche, texte à droite
          - odd  → row         : texte à gauche, images à droite
          - mobile → column    : texte en haut, images en bas */}
      <div className={`glass-card__inner ${isEven ? "glass-card__inner--even" : "glass-card__inner--odd"}`}>
        {textBlock}
        {imagesBlock}
      </div>
    </div>
  );
}

export default ProjectCards;
import React, { useRef, useState } from "react";
import { AiOutlineGithub, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import ImageLightbox from "./ImageLightbox";
import { FLAGS } from "../Flags";

// 🔹 Tag "Projet étudiant / Personnel" masqué : peu d'intérêt tant que la quasi-totalité
//    des projets sont scolaires. Repasser à true pour le réafficher.
const SHOW_PROJECT_TYPE = false;

// ⭐ Étoile "projet coup de cœur" en haut à gauche des cartes marquées "featured": true
//    dans projects.json. Passer à false pour masquer toutes les étoiles d'un coup
//    (ou retirer "featured" d'un projet pour l'enlever uniquement sur celui-ci).
const SHOW_FEATURED_STAR = true;

function ProjectCards({ data, id }) {
  const { i18n, t } = useTranslation();
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const langParam = i18n.language?.startsWith("en") ? "en" : "fr";
  const detailsHref = `/project/${data.id}?lng=${langParam}`;

  const FlagIcon = data.flag ? FLAGS[data.flag] : null;

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

  // 🔹 Galerie du projet, dans l'ordre d'affichage (img1 = grande, puis les 2 petites)
  const gallery = [data.img1, data.img2, data.img3].filter(Boolean);

  // Props communes pour rendre une image cliquable (souris + clavier)
  const openAt = (position) => ({
    onClick: () => setLightboxIndex(position),
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setLightboxIndex(position);
      }
    },
    role: "button",
    tabIndex: 0,
    "aria-label": t("lightbox.open"),
  });

  const imagesBlock = (
    <div className="glass-card__images">
      {data.img1 && (
        <div className="glass-card__img-container glass-card__img-container--main">
          {/* Le cadre reste fixe, seule l'image zoome à l'intérieur */}
          <div className="glass-card__img-frame" {...openAt(0)}>
            <img src={data.img1} alt={data.name} className="glass-card__img" />
          </div>
        </div>
      )}
      {(data.img2 || data.img3) && (
        <div className="glass-card__img-container glass-card__img-container--halves">
          {data.img2 && (
            <div
              className="glass-card__img-frame glass-card__img-frame--half"
              {...openAt(data.img1 ? 1 : 0)}
            >
              <img src={data.img2} alt={data.name} className="glass-card__img" />
            </div>
          )}
          {data.img3 && (
            <div
              className="glass-card__img-frame glass-card__img-frame--half"
              {...openAt(gallery.length - 1)}
            >
              <img src={data.img3} alt={data.name} className="glass-card__img" />
            </div>
          )}
        </div>
      )}

      {/* Pastille : signale la visionneuse (indispensable sur mobile, sans survol) */}
      {gallery.length > 0 && (
        <button
          type="button"
          className="glass-card__gallery-badge"
          onClick={() => setLightboxIndex(0)}
          aria-label={t("lightbox.open")}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          {gallery.length > 1 && <span>{gallery.length}</span>}
        </button>
      )}
    </div>
  );

  const textBlock = (
    <div className="glass-card__content">
      <div className="glass-card__top">
        <span className="glass-card__year">{data.date}</span>
        {SHOW_PROJECT_TYPE && (
          <span className="glass-card__badge">{data.project_type}</span>
        )}
      </div>

      <h2 className="glass-card__title">
        {data.name}
        {/* Drapeau optionnel (champ "flag" de projects.json, ex. "us") */}
        {FlagIcon && <FlagIcon className="glass-card__flag" />}
      </h2>
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

      {SHOW_FEATURED_STAR && data.featured && (
        data.corner === "us" ? (
          // 🇺🇸 Variante : coin aux couleurs du drapeau américain ("corner": "us" dans projects.json).
          //    Retirer "corner" du projet pour revenir au coin doré avec l'étoile.
          <span className="glass-card__star glass-card__star--us" title={t("labels.featured")} aria-label={t("labels.featured")} role="img">
            <svg viewBox="0 0 52 52" aria-hidden="true">
              <defs>
                <clipPath id={`corner-us-${data.id}`}>
                  <polygon points="0,0 52,0 0,52" />
                </clipPath>
              </defs>
              <g clipPath={`url(#corner-us-${data.id})`}>
                {/* 13 bandes rouges/blanches de 4px */}
                {Array.from({ length: 13 }, (_, i) => (
                  <rect key={i} x="0" y={i * 4} width="52" height="4" fill={i % 2 === 0 ? "#b22234" : "#fff"} />
                ))}
                {/* Canton bleu + étoile */}
                <rect x="0" y="0" width="24" height="24" fill="#3c3b6e" />
                <path
                  transform="translate(5 5) scale(0.58)"
                  fill="#fff"
                  d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5z"
                />
              </g>
            </svg>
          </span>
        ) : (
          <span className="glass-card__star" title={t("labels.featured")} aria-label={t("labels.featured")} role="img">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5z" />
            </svg>
          </span>
        )
      )}

      {/* DOM toujours : textBlock puis imagesBlock
          CSS gère l'ordre visuel via flex-direction :
          - even → row-reverse : images à gauche, texte à droite
          - odd  → row         : texte à gauche, images à droite
          - mobile → column    : texte en haut, images en bas */}
      <div className={`glass-card__inner ${isEven ? "glass-card__inner--even" : "glass-card__inner--odd"}`}>
        {textBlock}
        {imagesBlock}
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={gallery}
          index={lightboxIndex}
          alt={data.name}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}

export default ProjectCards;
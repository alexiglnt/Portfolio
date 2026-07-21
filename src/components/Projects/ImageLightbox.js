// src/components/Projects/ImageLightbox.js
// Visionneuse plein écran pour les images d'un projet.
// Montée via un portail sur document.body : la carte parent a overflow:hidden
// et un transform au survol, qui piègeraient un position:fixed interne.
import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

function ImageLightbox({ images, index, alt, onClose, onNavigate }) {
  const { t } = useTranslation();
  const total = images.length;
  const hasMultiple = total > 1;

  const goPrev = useCallback(
    () => onNavigate((index - 1 + total) % total),
    [index, total, onNavigate]
  );
  const goNext = useCallback(
    () => onNavigate((index + 1) % total),
    [index, total, onNavigate]
  );

  // 🔹 Clavier (Échap / flèches) + verrouillage du scroll de la page
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && hasMultiple) goPrev();
      else if (e.key === "ArrowRight" && hasMultiple) goNext();
    };
    window.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, goPrev, goNext, hasMultiple]);

  const stop = (e) => e.stopPropagation();

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox__btn lightbox__close"
        onClick={(e) => {
          stop(e);
          onClose();
        }}
        aria-label={t("lightbox.close")}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {hasMultiple && (
        <button
          type="button"
          className="lightbox__btn lightbox__nav lightbox__nav--prev"
          onClick={(e) => {
            stop(e);
            goPrev();
          }}
          aria-label={t("lightbox.prev")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      <img
        className="lightbox__img"
        src={images[index]}
        alt={alt}
        onClick={stop}
      />

      {hasMultiple && (
        <button
          type="button"
          className="lightbox__btn lightbox__nav lightbox__nav--next"
          onClick={(e) => {
            stop(e);
            goNext();
          }}
          aria-label={t("lightbox.next")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {hasMultiple && (
        <div className="lightbox__counter" onClick={stop}>
          {index + 1} / {total}
        </div>
      )}
    </div>,
    document.body
  );
}

export default ImageLightbox;

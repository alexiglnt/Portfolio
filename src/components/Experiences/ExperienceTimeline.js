// src/components/Experiences/ExperienceTimeline.js
// Timeline zigzag réutilisable (utilisée par les pages Expériences et CV)
import React, { useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard";

function ExperienceTimeline({ items = [], badgeCurrent }) {
  const timelineRef = useRef(null);
  const progressRef = useRef(null);

  // 🔹 Ligne centrale qui se remplit au fur et à mesure du scroll
  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      const progress = progressRef.current;
      if (!timeline || !progress) return;

      const rect = timeline.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const timelineTop = rect.top + scrollTop;
      const timelineBottom = timelineTop + rect.height;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      // Début du remplissage : quand le haut de la timeline arrive à 60% du viewport
      const start = timelineTop - window.innerHeight * 0.6;
      // Fin : quand le bas de la timeline approche du bas du viewport,
      // borné par le scroll max → garantit 100% quand on est en bas de page
      const end = Math.min(timelineBottom - window.innerHeight * 0.9, maxScroll);

      const ratio =
        end > start
          ? Math.max(0, Math.min(1, (scrollTop - start) / (end - start)))
          : scrollTop >= start
          ? 1
          : 0;
      progress.style.height = `${ratio * 100}%`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items.length]);

  return (
    <div className="exp-timeline" ref={timelineRef}>
      <div className="exp-timeline__line" aria-hidden="true">
        <div className="exp-timeline__progress" ref={progressRef} />
      </div>

      {items.map((item, idx) => (
        <ExperienceCard
          key={idx}
          side={idx % 2 === 0 ? "left" : "right"}
          title={item.title}
          company={item.company}
          date={item.date}
          description={item.description}
          location={item.location}
          flag={item.flag}
          logo={item.logo}
          logoFrame={item.logoFrame}
          tags={item.tags}
          current={item.current}
          badgeCurrent={badgeCurrent}
        />
      ))}
    </div>
  );
}

export default ExperienceTimeline;

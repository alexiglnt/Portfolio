// src/components/Experiences/Experiences.js
import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceTimeline from "./ExperienceTimeline";
import { useTranslation } from "react-i18next";

function Experiences() {
  const { t } = useTranslation();

  // 🔹 On récupère le tableau d’expériences traduit
  const experiences = t("experiences.items", { returnObjects: true });
  const badgeCurrent = t("experiences.badgeCurrent");

  return (
    <>
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            {t("experiencesPage.title.part1")}{" "}
            <strong className="purple">{t("experiencesPage.title.part2")}</strong>
          </h1>
          <br />

          <ExperienceTimeline items={experiences} badgeCurrent={badgeCurrent} />
        </Container>
      </Container>
    </>
  );
}

export default Experiences;

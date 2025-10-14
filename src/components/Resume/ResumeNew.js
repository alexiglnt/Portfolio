import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import ExperienceCard from "../Experiences/ExperienceCard";
import { useTranslation } from "react-i18next";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const { t, i18n } = useTranslation();

  const [width, setWidth] = useState(800);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // 🔹 PDF par langue (mets tes fichiers dans /public/cv/)
  const resumeByLang = {
    fr: "/cv/CV_Alexi_Gallonet_FR.pdf",
    en: "/cv/CV_Alexi_Gallonet_EN.pdf",
  };
  const resumeHref = i18n.language?.startsWith("en")
    ? resumeByLang.en
    : resumeByLang.fr;

  // 🔹 Formations traduites
  const educations = t("education.items", { returnObjects: true });

  return (
    <div>
      <Container fluid className="project-section">
        <h1 className="project-heading">
          {t("resumePage.title.part1")}{" "}
          <strong className="purple">{t("resumePage.title.part2")}</strong>
        </h1>

        <br /><br />

        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="download_btn"
            aria-label={t("resumePage.download_aria")}
            style={{ width: "260px", marginBottom: 0, textAlign: "center" }}
          >
            <AiOutlineDownload />
            &nbsp;{t("resumePage.download")}
          </a>
        </Row>

        <Row className="resume">
          <Document file={resumeHref} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.47} />
          </Document>
        </Row>

        <br /><br /><br /><br /><br /><br />

        <h1 className="project-heading">
          {t("educationPage.title.part1")}{" "}
          <strong className="purple">{t("educationPage.title.part2")}</strong>
        </h1>
        <br /><br />

        <div className="exp-wrapper">
          {educations.map((edu, idx) => (
            <React.Fragment key={idx}>
              <ExperienceCard
                title={edu.title}
                company={edu.company}
                date={edu.date}
                description={edu.description}
                location={edu.location}
                logo={edu.logo}
              />
              {idx < educations.length - 1 && (
                <>
                  <div className="experience-divider-bullet"></div>
                  <div className="experience-divider"></div>
                  <div className="experience-divider-bullet"></div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        <br /><br />
      </Container>
    </div>
  );
}

export default ResumeNew;

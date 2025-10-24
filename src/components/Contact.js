import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import pdf from "../Assets/CV - Alexi GALLONET - Portfolio.pdf";
import { useTranslation } from "react-i18next";
// ... (autres imports et composants) ...

const Contact = () => {
  const { t } = useTranslation();

  const socialLinkStyle = {
    '--size': '119.13px',
  };
  const socialLinkStyle2 = {
    '--size': '90.65px',
  };
  const socialLinkStyle3 = {
    '--size': '202.84px',
  };
  const socialLinkStyle4 = {
    '--size': '70.65px',
  };

  return (
    <Container fluid className="about-section" id="contact_section">
      <Particle />
      <h1 className="project-heading">
        {t("contactPage.title.part1")} <strong className="purple"> {t("contactPage.title.part2")} </strong>
      </h1>


      <section >
        <div className="content_leaning">
          <div className="contact_content">
            <div className="social_line" data-aos="fade-down" data-aos-duration="1000">
              <a className="social_link" href="https://www.linkedin.com/in/alexi-gallonet" target="_blank"
                rel="noreferrer" style={socialLinkStyle}>
                <img src="téléchargement.svg" width="12%" alt="how contact me" />
                <div className="social_text">
                  <span>in/alexi-gallonet</span>
                </div>
              </a>
            </div>
            <div className="social_line" data-aos="fade-down" data-aos-duration="2000">
              <a className="social_link" rel="noreferrer" href="https://github.com/alexiglnt" target="_blank" style={socialLinkStyle2}>
                <img src="téléchargement (1).svg" width="12%" alt="how contact me" />
                <div className="social_text">
                  <span>alexiglnt</span>
                </div>
              </a>
            </div>
            <div className="social_line" data-aos="fade-down" data-aos-duration="3000">
              <div className="social_link" style={socialLinkStyle3}>
                <a href="mailto:contact@alexigallonet.com" target="_blank" rel="noreferrer">
                  <img src="téléchargement (2).svg" width="12%" alt="how contact me" />
                </a>
                <div className="social_text">
                  <a href="mailto:contact@alexigallonet.com" target="_blank" rel="noreferrer">
                    <span>contact@alexigallonet.com</span>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="social_line" data-aos="fade-down" data-aos-duration="2000">
              <a className="social_link" href={pdf} target="_blank" rel="noreferrer"
                style={socialLinkStyle4}>
                <img src="CVcalque.png" alt="how contact me" />
                <div className="social_text">
                  <span>Mon CV</span>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </section>

    </Container>
  );
};

export default Contact;
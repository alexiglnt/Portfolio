import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineLineChart,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

/* Sous-composant card réutilisant le glassmorphism existant */
function NavCard({ icon, title, text, href }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1) + "%";
    const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1) + "%";
    glow.style.background = `radial-gradient(circle at ${x} ${y}, rgba(120,80,255,0.20), transparent 65%)`;
    glow.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <div
      className="glass-card home-nav-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(href)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(href)}
    >
      <div className="glass-card__glow" ref={glowRef} />

      <div className="home-nav-card__icon">{icon}</div>
      <h3 className="home-nav-card__title">{title}</h3>
      <p className="home-nav-card__text">{text}</p>
    </div>
  );
}

function Home2() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: <AiOutlineFundProjectionScreen />,
      title: t("home2.cardProjectsTitle"),
      text: t("home2.cardProjectsText"),
      href: "/projects",
    },
    {
      icon: <AiOutlineLineChart />,
      title: t("home2.cardSkillsTitle"),
      text: t("home2.cardSkillsText"),
      href: "/skills",
    },
    {
      icon: <AiOutlineThunderbolt />,
      title: t("home2.cardExperiencesTitle"),
      text: t("home2.cardExperiencesText"),
      href: "/experiences",
    },
    {
      icon: <AiOutlineUser />,
      title: t("home2.cardContactTitle"),
      text: t("home2.cardContactText"),
      href: "/contact",
    },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      {/* Bloc texte gauche */}
      <Container className="home-about-left-side">
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <Trans
                i18nKey="home2.introTitle"
                components={[<span className="purple" />]}
              />
            </h1>
            <p className="home-about-body">
              <Trans
                i18nKey="home2.introText1"
                components={[<b className="purple" />]}
              />
              <br />
              <Trans
                i18nKey="home2.introText2"
                components={[
                  <b className="purple" />,
                  <b className="purple" />,
                  <b className="purple" />,
                ]}
              />
              <br /><br />
              {t("home2.introText3")}
              <br /><br />
              <Trans
                i18nKey="home2.introText4"
                components={[
                  <b className="purple" />,
                  <b className="purple" />,
                  <b className="purple" />,
                ]}
              />
            </p>
          </Col>
        </Row>
      </Container>

      {/* Bloc cards droite */}
      <Container className="home-about-right-side">
        <Col className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            <Trans
              i18nKey="home2.moreTitle"
              components={[<span className="purple" />]}
            />
          </h1>
          <br />
        </Col>

        <div className="home-nav-grid">
          {cards.map((card) => (
            <NavCard key={card.href} {...card} />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Home2;
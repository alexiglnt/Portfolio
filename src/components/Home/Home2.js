import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  AiOutlineArrowRight,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineLineChart,
  AiOutlineThunderbolt
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

function Home2() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
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
                  <b className="purple" />, // ISIMA
                  <b className="purple" />, // PI System Automation
                  <b className="purple" />  // Galilé
                ]}
              />
              <br />
              <br />
              {t("home2.introText3")}
              <br />
              <br />
              <Trans
                i18nKey="home2.introText4"
                components={[
                  <b className="purple" />, // JavaScript
                  <b className="purple" />, // React
                  <b className="purple" />  // Next.js
                ]}
              />
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="home-about-right-side">
        <Col className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            <Trans
              i18nKey="home2.moreTitle"
              components={[<span className="purple" />]}
            />
          </h1>
          <br />
          {/* ICI */}
        </Col>

        <Container className="home-about-cards">
          <Row>
            {/* Première carte */}
            <Col md={6} xs={12}>
              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/projects");
                }}
              >
                <Card className="home-cards">
                  <Card.Body>
                    <Card.Title>
                      <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
                      {" "}
                      {t("home2.cardProjectsTitle")}
                    </Card.Title>
                    <br />
                    <Card.Text>{t("home2.cardProjectsText")}</Card.Text>
                    <AiOutlineArrowRight className="icon-card-move" style={{ marginBottom: "2px" }} />
                  </Card.Body>
                </Card>
              </a>
            </Col>

            {/* Deuxième carte */}
            <Col md={6} xs={12}>
              <a
                href="/skills"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/skills");
                }}
              >
                <Card className="home-cards">
                  <Card.Body>
                    <Card.Title>
                      <AiOutlineLineChart style={{ marginBottom: "2px" }} />
                      {" "}
                      {t("home2.cardSkillsTitle")}
                    </Card.Title>
                    <br />
                    <Card.Text>{t("home2.cardSkillsText")}</Card.Text>
                    <AiOutlineArrowRight className="icon-card-move" style={{ marginBottom: "2px" }} />
                  </Card.Body>
                </Card>
              </a>
            </Col>

            {/* Troisième carte */}
            <Col md={6} xs={12} margin-bottom={20}>
              <a
                href="/experiences"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/experiences");
                }}
              >
                <Card className="home-cards">
                  <Card.Body>
                    <Card.Title>
                      <AiOutlineThunderbolt style={{ marginBottom: "2px" }} />
                      {" "}
                      {t("home2.cardExperiencesTitle")}
                    </Card.Title>
                    <br />
                    <Card.Text>{t("home2.cardExperiencesText")}</Card.Text>
                    <AiOutlineArrowRight className="icon-card-move" style={{ marginBottom: "2px" }} />
                  </Card.Body>
                </Card>
              </a>
            </Col>

            {/* Quatrième carte */}
            <Col md={6} xs={12}>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                }}
              >
                <Card className="home-cards">
                  <Card.Body>
                    <Card.Title>
                      <AiOutlineUser style={{ marginBottom: "2px" }} />
                      {" "}
                      {t("home2.cardContactTitle")}
                    </Card.Title>
                    <br />
                    <Card.Text>{t("home2.cardContactText")}</Card.Text>
                    <AiOutlineArrowRight className="icon-card-move" style={{ marginBottom: "2px" }} />
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
export default Home2;

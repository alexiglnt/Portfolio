import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/Gallonet Blue.png";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineLineChart,
  AiOutlineThunderbolt
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { useTranslation } from 'react-i18next'; 

function NavBar() {
  const { t, i18n } = useTranslation();

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleLang = () => {
    const next = i18n.language.startsWith('fr') ? 'en' : 'fr';
    i18n.changeLanguage(next);
  };

  const redirectToContact = () => {
    updateExpanded(false);
    navigate('/contact');
  };

  function isLinkActive(path) {
    return location.pathname === path;
  }


  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link} to="/"
                onClick={() => updateExpanded(false)}
                style={isLinkActive("/") ? { fontWeight: "bold" } : {}} >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t('nav.home')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => updateExpanded(false)}
                style={isLinkActive("/projects") ? { fontWeight: "bold" } : {}}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t('nav.projects')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skills"
                onClick={() => updateExpanded(false)}
                style={isLinkActive("/skills") ? { fontWeight: "bold" } : {}}
              >
                <AiOutlineLineChart
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t('nav.skills')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/experiences"
                onClick={() => updateExpanded(false)}
                style={isLinkActive("/experiences") ? { fontWeight: "bold" } : {}}
              >
                <AiOutlineThunderbolt style={{ marginBottom: "2px" }} /> {t('nav.experiences')}
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                style={isLinkActive("/resume") ? { fontWeight: "bold" } : {}}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> CV
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                onClick={redirectToContact}
                className="fork-btn-inner"
              >
                <AiOutlineUser style={{ fontSize: "1.2em" }} /> {t('nav.contact')}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <button onClick={toggleLang} className="lang-toggle">
        {t('nav.lang')}
      </button>
    </Navbar>
  );
}

export default NavBar;

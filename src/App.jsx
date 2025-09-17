import styles from "./App.module.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = document.querySelector("nav").offsetHeight;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - navHeight,
      behavior: "smooth",
    });
  }
}

import { useState, useEffect } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 700);
      if (window.innerWidth > 700) setMenuOpen(false);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function handleNavClick(id) {
    scrollToSection(id);
    setMenuOpen(false);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <a
            className={styles.siteName}
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            David Zhu
          </a>
        </div>
        {isMobile && (
          <div
            className={styles.hamburger}
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((open) => !open);
            }}
          >
            <div className={styles.hamburgerBar}></div>
            <div className={styles.hamburgerBar}></div>
            <div className={styles.hamburgerBar}></div>
          </div>
        )}
        <div
          className={`${styles.navRight} ${isMobile ? styles.mobileNav : ""} ${
            isMobile && menuOpen ? styles.open : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          {/* <a
            className={styles.navTab}
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            About
          </a> */}
          <a
            className={styles.navTab}
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("projects");
            }}
          >
            Projects
          </a>
          <a
            className={styles.navTab}
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("skills");
            }}
          >
            Skills
          </a>
          <a
            className={styles.navTab}
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("resume");
            }}
          >
            Resume
          </a>
          <a
            className={styles.navTab}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            Contact
          </a>
        </div>
      </nav>
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;

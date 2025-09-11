import { useState } from "react";
import styles from "./App.module.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";

function App() {
  return (
    <Router>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <Link className={styles.siteName} to="/">
            David Zhu
          </Link>
        </div>
        <div className={styles.navRight}>
          <Link className={styles.navTab} to="/about">
            About
          </Link>
          <Link className={styles.navTab} to="/skills">
            Skills
          </Link>
          <Link className={styles.navTab} to="/projects">
            Projects
          </Link>
          <a className={styles.navTab} href="#resume">
            Resume
          </a>
          <a className={styles.navTab} href="#contact">
            Contact
          </a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;

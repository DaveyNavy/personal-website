import { useState } from "react";
import styles from "./App.module.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
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
          <a className={styles.navTab} href="#skills">
            Skills
          </a>
          <a className={styles.navTab} href="#projects">
            Projects
          </a>
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
      </Routes>
    </Router>
  );
}

export default App;

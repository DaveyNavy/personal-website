import { useState } from "react";
import styles from "./App.module.css";
import Home from "./Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <span className={styles.siteName}>David Zhu</span>
        </div>
        <div className={styles.navRight}>
          <a className={styles.navTab} href="#about">
            About
          </a>
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
      <Home />
    </>
  );
}

export default App;

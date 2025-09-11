import styles from "./Home.module.css";
import GithubIcon from "./assets/github.svg";
import LinkedinIcon from "./assets/linkedin.svg";
import EmailIcon from "./assets/email.svg";
import { useState, useEffect } from "react";

const icons = [
  {
    href: "#",
    label: "GitHub",
    svg: GithubIcon,
  },
  {
    href: "#",
    label: "LinkedIn",
    svg: LinkedinIcon,
  },
  {
    href: "#",
    label: "Email",
    svg: EmailIcon,
  },
];

export default function Home() {
  const fullTitle = "Software Engineer";
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <div className={styles.hello}>HELLO, I'M</div>
        <div>
          <span className={styles.name}>David Zhu</span>
        </div>
        <div className={styles.title}>
          {typedTitle}
          <span className={styles.blinkingCursor}>|</span>
        </div>
        <div className={styles.description}>
          Dynamic and results-oriented Software Engineer with over 5 years of
          experience specializing in architecting scalable solutions and leading
          transformative projects. Proven track record of diagnosing complex
          challenges, delivering innovative solutions, and fostering
          collaborative team environments.
        </div>
        <div className={styles.buttonRow}>
          <button className={styles.resumeBtn}>Download Resume</button>
          <button className={styles.contactBtn}>Contact Me</button>
        </div>
        <div className={styles.socialRow}>
          {icons.map((icon, i) => (
            <a key={i} href={icon.href} aria-label={icon.label}>
              <img
                className={styles.socialIcon}
                src={icon.svg}
                alt={icon.label}
              />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.homeImageContainer}>
        <div className={styles.homeImage}></div>
      </div>
    </div>
  );
}

import styles from "./Home.module.css";
import GithubIcon from "./assets/github.svg";
import LinkedinIcon from "./assets/linkedin.svg";
import EmailIcon from "./assets/email.svg";
import Profile from "./assets/David_Headshot_Square.jpg";
import { useState, useEffect } from "react";

const icons = [
  {
    href: "#",
    label: "GitHub",
    svg: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/david-zhu-717863298/",
    label: "LinkedIn",
    svg: LinkedinIcon,
  },
  {
    href: "mailto:davidyzhu2@gmail.com",
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
          Welcome to my personal website! I'm currently a student at UCLA,
          majoring in Computer Science with a minor in Mathematics. My interests
          are mainly in backend development, including databases, CI/CD, and
          distributed systems, but I also enjoy reading about artificial
          intelligence and do game development in my free time. Check out some
          of the projects I've worked on!
        </div>
        <div className={styles.buttonRow}>
          <a
            href="/assets/Resume_David_Zhu.pdf"
            download="Resume_David_Zhu.pdf"
            className={styles.resumeBtn}
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            Download Resume
          </a>
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
        <div className={styles.homeImage}>
          <img src={Profile} className={styles.profileImg} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

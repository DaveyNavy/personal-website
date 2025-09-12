import styles from "./About.module.css";
import { FaCheckCircle } from "react-icons/fa";

const aboutList = [
  "Develop highly interactive Front end / User Interfaces for the web",
  "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
  "Integration of third party services such as AWS / Digital Ocean",
  "Integration of payment services such as M-Pesa and paypal etc",
  "Develop highly interactive Mobile Applications",
  "Develop highly interactive Backend / API services",
];

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutImageContainer}>
        <div className={styles.aboutImage}></div>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutTitle}>ABOUT ME</div>
        <div className={styles.aboutHeadline}>
          <span className={styles.highlight}>Driven</span>, Innovative
          <br />
          Software <span className={styles.highlight}>Engineer</span>
        </div>
        <div className={styles.aboutDescription}>
          More than 5 years Experience in the development of software and
          solutions. A conscientious person who pays attention to details. Very
          passionate about software development, always willing and ready to
          learn new things/concepts. Proven leader with the ability to
          streamline development processes to drive the achievement of
          organisational objectives.
        </div>
        <ul className={styles.aboutList}>
          {aboutList.map((item, i) => (
            <li className={styles.aboutListItem} key={i}>
              <FaCheckCircle
                className={styles.aboutListIcon}
                style={{
                  color: "#2563eb",
                  marginRight: 12,
                  fontSize: "1.2em",
                  verticalAlign: "middle",
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

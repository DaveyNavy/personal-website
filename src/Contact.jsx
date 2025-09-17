import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>
        Let's <span className={styles.highlight}>Connect</span>
      </h1>
      <div className={styles.contactGrid}>
        <div className={styles.contactCard}>
          <div className={styles.iconWrapper}>
            <img src="/src/assets/email.svg" alt="Email" className={styles.contactIcon} />
          </div>
          <h3 className={styles.contactMethod}>Email</h3>
          <a 
            href="mailto:davidyzhu2@gmail.com" 
            className={styles.contactLink}
          >
            davidyzhu2@gmail.com
          </a>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.iconWrapper}>
            <img src="/src/assets/linkedin.svg" alt="LinkedIn" className={styles.contactIcon} />
          </div>
          <h3 className={styles.contactMethod}>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/david-zhu-717863298/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            View Profile
          </a>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.iconWrapper}>
            <img src="/src/assets/github.svg" alt="GitHub" className={styles.contactIcon} />
          </div>
          <h3 className={styles.contactMethod}>GitHub</h3>
          <a
            href="https://github.com/DaveyNavy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

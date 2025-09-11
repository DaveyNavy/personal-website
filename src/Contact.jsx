import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Me</h1>
      <p className={styles.contactSubtitle}>You can reach me at:</p>
      <div className={styles.contactInfoBox}>
        {/* Replace with your actual contact info below */}
        <div>
          Email: <a href="mailto:davidyzhu2@gmail.com">davidyzhu2@gmail.com</a>
        </div>
        <div>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/david-zhu-717863298/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/david-zhu-717863298
          </a>
        </div>
        {/* Add more contact methods as needed */}
      </div>
    </div>
  );
}

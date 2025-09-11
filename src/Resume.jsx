import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <h1 className={styles.resumeTitle}>My Resume</h1>
      <div className={styles.resumeEmbedWrapper}>
        <div className={styles.iframeWrapper}>
          <iframe
            src="/assets/Resume_David_Zhu.pdf"
            title="Resume PDF"
            width="100%"
            height="1200px"
            className={styles.resumeIframe}
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}

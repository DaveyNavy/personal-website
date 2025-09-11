import styles from "./card.module.css";

export default function Card({ info }) {
  return (
    <div className={styles.cardOuter}>
      <div className={styles.cardImageContainer}>
        <img src={info.image} alt={info.name} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardType}>{info.type.toUpperCase()}</div>
        <div className={styles.cardName}>{info.name}</div>
        <div className={styles.cardDescription}>{info.description}</div>
        <a
          href={info.link}
          className={styles.cardArrow}
          aria-label="View Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M17 7L7 17" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </div>
  );
}

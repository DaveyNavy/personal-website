import styles from "./project-scroll.module.css";

export default function ProjectScroll({
  projects,
  title,
  subtitle,
  highlight,
}) {
  return (
    <div className={styles.scrollSection}>
      <div className={styles.projectsTitle} style={{ marginTop: "4rem" }}>
        {title}
      </div>
      <div className={styles.projectsHeadline}>
        {subtitle.split(highlight).map((part, i) =>
          i === 0 ? (
            <>
              {part}
              <span className={styles.highlight}>{highlight}</span>
            </>
          ) : (
            part
          )
        )}
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollArea}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.name}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.overlay}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={styles.tagContainer}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

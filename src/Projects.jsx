import styles from "./Projects.module.css";
import {
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { useState } from "react";

const projects = [
  {
    type: "Website / CMS",
    name: "Mount Kenya Wildlife Conservancy (MKWC)",
    description:
      "A non-profit trust dedicated to preserving the environment and the wildlife within. For 20 years, the MKWC has served as a beacon of conservation, preserving and protecting nature's beauty and wildlife for present and future generations.",
    image: "https://i.imgur.com/4M34hi2.png",
    link: "#",
  },
  {
    type: "Web App",
    name: "Sample Project 2",
    description:
      "This is a sample project for demonstration. Replace with your own projects!",
    image: "https://placehold.co/600x400/222/fff?text=Project+2",
    link: "#",
  },
  {
    type: "Mobile App",
    name: "Sample Project 3",
    description:
      "Another example project. Add as many as you like to the carousel.",
    image: "https://placehold.co/600x400/333/fff?text=Project+3",
    link: "#",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const prevProject = () => setCurrent((prev) => (prev - 1 + total) % total);
  const nextProject = () => setCurrent((prev) => (prev + 1) % total);
  const project = projects[current];

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsTitle}>LATEST WORKS</div>
      <div className={styles.projectsHeadline}>
        Explore My Popular <span className={styles.highlight}>Projects</span>
      </div>
      <div className={styles.projectCard}>
        <button
          className={styles.carouselArrow}
          onClick={prevProject}
          aria-label="Previous Project"
          style={{ left: 0 }}
        >
          <FaChevronLeft />
        </button>
        <div className={styles.projectImageContainer}>
          <img
            className={styles.projectImage}
            src={project.image}
            alt={project.name}
          />
        </div>
        <div className={styles.projectContent}>
          <div className={styles.projectType}>{project.type.toUpperCase()}</div>
          <div className={styles.projectName}>{project.name}</div>
          <div className={styles.projectDescription}>{project.description}</div>
          <a
            href={project.link}
            className={styles.projectArrow}
            aria-label="View Project"
          >
            <FaArrowUpRightFromSquare />
          </a>
        </div>
        <button
          className={styles.carouselArrow}
          onClick={nextProject}
          aria-label="Next Project"
          style={{ right: 0 }}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className={styles.carouselIndicators}>
        {projects.map((_, i) => (
          <span
            key={i}
            className={
              styles.carouselDot + (i === current ? " " + styles.activeDot : "")
            }
            onClick={() => setCurrent(i)}
            aria-label={`Go to project ${i + 1}`}
            role="button"
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}

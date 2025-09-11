import styles from "./Projects.module.css";
import {
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import Carousel from "./components/carousel.jsx";

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
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsTitle}>LATEST WORKS</div>
      <div className={styles.projectsHeadline}>
        Explore My Popular <span className={styles.highlight}>Projects</span>
      </div>
      <Carousel projects={projects}></Carousel>
    </div>
  );
}

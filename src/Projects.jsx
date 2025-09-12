import styles from "./Projects.module.css";
import {
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import Carousel from "./components/carousel.jsx";
import Chrysalis from "./assets/chrysalis.png";

const projects = [
  {
    type: "Game",
    name: "Chrysalis",
    description:
      "A 2D puzzle-platformer game made in Unity and C#, with a creative core mechanic and 10 distinct levels. Made in 72 hours for UCLA's Fiat Ludum game jam, Chrysalis took 3rd place out of 30 teams.",
    image: Chrysalis,
    link: "https://vlad-the-inhaler.itch.io/chrysalis",
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

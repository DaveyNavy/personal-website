import styles from "./Projects.module.css";
import Carousel from "./components/carousel.jsx";
import ProjectScroll from "./components/project-scroll.jsx";
import Chrysalis from "./assets/chrysalis.png";
import Pool from "./assets/pool.png";
import Juncture from "./assets/juncture.png";

const gameProjects = [
  {
    name: "Chrysalis",
    image: Chrysalis,
    description:
      "A 2D puzzle-platformer game made in Unity and C#, with a creative core mechanic and 10 distinct levels. Winner of 3rd place at UCLA's game jam.",
    link: "https://vlad-the-inhaler.itch.io/chrysalis",
    tags: ["Unity", "C#", "Game Design"],
  },
  {
    name: "Pool Party",
    description:
      "A classic pool game with custom graphics and physics made using Javascript and Three.JS. Features realistic 3D environment.",
    link: "https://github.com/rachjn/bowling-bonanza",
    tags: ["Three.js", "JavaScript", "WebGL"],
  },
];

const websiteProjects = [
  {
    name: "Personal Website",
    description:
      "A responsive portfolio website built with React and modern CSS, featuring smooth animations and a clean design.",
    link: "https://github.com/DaveyNavy/personal-website",
    tags: ["React", "CSS Modules", "Vite"],
  },
  {
    name: "Project 2",
    description: "Description for Project 2",
    link: "#",
    tags: ["Tag1", "Tag2", "Tag3"],
  },
  {
    name: "Project 3",
    description: "Description for Project 3",
    link: "#",
    tags: ["Tag1", "Tag2"],
  },
];

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
    name: "Juncture",
    description:
      "Juncture simplifies the college club hunt through a familiar swipe-and-match format, encouraging students to step our of their rooms and explore the world. Juncture was a full stack web app made using React, Node.js, Express, and MongoDB, and was built in 36 hours for UCLA's LA Hacks hackathon.",
    image: Juncture,
    link: "https://devpost.com/software/juncture",
  },
  {
    type: "Website / Game",
    name: "Pool Party",
    description:
      "A classic pool game with custom graphics and physics made using Javascript and Three.JS. Fully custom shaders, lighting, and graphics rendering replicate a realistic 3D environment.",
    image: Pool,
    link: "https://github.com/rachjn/bowling-bonanza",
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
      <ProjectScroll
        projects={websiteProjects}
        title="WEBSITES"
        subtitle="My Web Development Projects"
        highlight="Development"
      />
      <ProjectScroll
        projects={gameProjects}
        title="GAMES"
        subtitle="My Game Development Projects"
        highlight="Development"
      />
    </div>
  );
}

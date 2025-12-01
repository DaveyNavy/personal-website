import styles from "./Projects.module.css";
import Carousel from "./components/carousel.jsx";
import ProjectScroll from "./components/project-scroll.jsx";
import Chrysalis from "./assets/chrysalis.png";
import Homunculus from "./assets/homunculus.png";
import Pool from "./assets/pool.png";
import Juncture from "./assets/juncture.jpg";
import JunctureWide from "./assets/juncture.png";
import Kitchen from "./assets/kitchen.png";
import Faithless from "./assets/faithless.png";
import Massature from "./assets/massature.png";
import BeBetter from "./assets/bebetter.png";
import ForkedRepos from "./assets/forkedrepos.png";
import Studio from "./assets/studio.png";

const gameProjects = [
  {
    name: "Chrysalis",
    image: Chrysalis,
    description:
      "A 2D puzzle-platformer game made in Unity and C#, with a creative core mechanic and 10 distinct levels. Winner of 3rd place at UCLA's Fiat Ludum game jam.",
    link: "https://vlad-the-inhaler.itch.io/chrysalis",
    tags: ["Unity", "C#"],
  },
  {
    name: "Homunculus",
    image: Homunculus,
    description:
      "A 2D top-down roguelike dungeon crawler made in Unity for Ludum Dare 58. Ranked 85th natonally out of 1000+ entries.",
    link: "https://jomnaq.itch.io/homunculus",
    tags: ["Unity", "C#"],
  },
  {
    name: "Faithless",
    image: Faithless,
    description:
      "A 3D FPS adventure game made in Unreal Engine 5, with completely custom assets and environments. Featuring varied enemies and a boss level, Faithless was made over 6 months with a team of 10+ UCLA students.",
    link: "https://jomnaq.itch.io/faithless",
    tags: ["Unreal Engine", "C++", "3D Modeling"],
  },
  {
    name: "Pool Party",
    image: Pool,
    description:
      "A classic pool game with custom graphics and physics made using Javascript and Three.JS. Features custom realistic 3D environment.",
    link: "https://github.com/rachjn/bowling-bonanza",
    tags: ["Three.js", "JavaScript", "WebGL"],
  },
  {
    name: "Hell's Kitchen",
    image: Kitchen,
    description:
      "A fast-paced multitasking game where players smash bugs and prevent food from spoiling. Made in 72 hours for Ludum Dare 56.",
    link: "  https://vlad-the-inhaler.itch.io/hells-kitchen",
    tags: ["Unity", "C#"],
  },
  {
    name: "Massature",
    image: Massature,
    description:
      "A 2D side-scrolling platformer featuring a core shape-shifting mechanic to complete puzzle-based levels. ",
    link: "http://vlad-the-inhaler.itch.io/mass",
    tags: ["Unity", "C#"],
  },
];

const websiteProjects = [
  {
    name: "ACM Studio Website",
    image: Studio,
    description:
      "The public website for UCLA's ACM Studio, the premier student-run club for game development on campus. Showcases the studio's projects, team members, and events.",
    link: "https://studio.uclaacm.com/",
    tags: ["React", "Typescript", "MUI"],
  },
  {
    name: "BeBetter",
    image: BeBetter,
    description:
      "Transform your personal accountability into gambling with friends. Track tasks, earn rewards, and bet on friends to achieve your goals in a fun, (slightly) supportive community.",
    link: "https://devpost.com/software/bebetter-56hf7i",
    tags: ["React", "PostgreSQL", "Express.JS", "AWS"],
  },
  {
    name: "Juncture",
    image: Juncture,
    description:
      "Juncture simplifies the college club hunt through a familiar swipe-and-match format, encouraging students to step our of their rooms and explore the world. Juncture was a full stack web app made using React, Node.js, and Django, and was built in 36 hours for UCLA's LA Hacks hackathon.",
    link: "https://devpost.com/software/juncture",
    tags: ["React", "Django", "Javascript", "Typescript"],
  },
  {
    name: "Forked Repos",
    image: ForkedRepos,
    description:
      "Forked Repos is a website designed for users to conveniently find and share their favorite recipes. With dynamic search and filtering and an intuitive UI, it guarentees that you can find your next meal tailored to your specific preferences.",
    link: "https://github.com/DaveyNavy/Forked-Repos",
    tags: ["React", "PostgreSQL", "Javascript", "Express.JS"],
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
      "Juncture simplifies the college club hunt through a familiar swipe-and-match format, encouraging students to step our of their rooms and explore the world. Juncture was a full stack web app made using React, Node.js, and Django, and was built in 36 hours for UCLA's LA Hacks hackathon.",
    image: JunctureWide,
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
        title="APPS / WEBSITES"
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

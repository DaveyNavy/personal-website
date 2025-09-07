import styles from "./Skills.module.css";
import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCplusplus,
  SiDjango,
  SiExpress,
  SiPostgresql,
  SiApachespark,
  SiApachehadoop,
  SiJira,
  SiHtml5,
  SiCss3,
  SiDatabricks,
  SiJavascript,
  SiLinux,
} from "react-icons/si";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import Linux from "./assets/linux.svg";
import Azure from "./assets/azure.svg";

const iconSize = 64;
const skills = [
  { name: "C++", icon: <SiCplusplus color="#00599C" size={iconSize} /> },
  { name: "Java", icon: <FaJava color="#f89820" size={iconSize} /> },
  { name: "Python", icon: <FaPython color="#3776ab" size={iconSize} /> },
  { name: "C#", icon: <DiVisualstudio color="#68217A" size={iconSize} /> },
  {
    name: "Typescript",
    icon: <SiTypescript color="#3178c6" size={iconSize} />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript color="#f7df1e" size={iconSize} />,
  },
  { name: "SQL", icon: <DiMsqlServer color="#CC2927" size={iconSize} /> },
  { name: "HTML", icon: <SiHtml5 color="#e34c26" size={iconSize} /> },
  { name: "CSS", icon: <SiCss3 color="#2965f1" size={iconSize} /> },
  { name: "React", icon: <FaReact color="#61dafb" size={iconSize} /> },
  { name: "Django", icon: <SiDjango color="#092e20" size={iconSize} /> },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" size={iconSize} /> },
  { name: "Express.js", icon: <SiExpress color="#fff" size={iconSize} /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql color="#336791" size={iconSize} />,
  },
  {
    name: "Apache Spark",
    icon: <SiApachespark color="#e25a1c" size={iconSize} />,
  },
  { name: "Hadoop", icon: <SiApachehadoop color="#66ccff" size={iconSize} /> },
  {
    name: "Databricks",
    icon: <SiDatabricks color="#ff3621" size={iconSize} />,
  },
  { name: "Git", icon: <FaGitAlt color="#f34f29" size={iconSize} /> },
  { name: "Docker", icon: <FaDocker color="#2496ed" size={iconSize} /> },
  { name: "Linux", icon: <img width={iconSize} src={Linux} /> },
  { name: "Jira", icon: <SiJira color="#2684ff" size={iconSize} /> },
  {
    name: "MS Azure",
    icon: <img width={iconSize} src={Azure} />,
  },
];

export default function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsTitle}>MY TALENT</div>
      <div className={styles.skillsHeadline}>Professional Skills</div>
      <div className={styles.skillsGrid}>
        {skills.map((skill, i) => (
          <div className={styles.skillCard} key={i}>
            <div className={styles.skillIcon}>{skill.icon}</div>
            <div className={styles.skillName}>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

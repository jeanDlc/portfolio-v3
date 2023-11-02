import ProjectCard from "@/components/ProjectCard";
import { baiJamjuree } from "@/fonts";
import styles from "./styles.module.scss";

import arrowDownSvg from "@/assets/arrow-down.svg";

import type { Project } from "@/types";
import Image from "next/image";

const Projects = () => {
  const projects: Project[] = [1, 2, 3, 4].map((id) => ({
    company: "",
    name: "Code Play",
    description:
      "Code Play is an online HTML, CSS and JavaScript editor. You can code in real time and share the link with anybody",
    stack: ["React", "Bootstrap", "Styled components"],
    demoUrl: "",
    image: "",
    repoUrl: "",
    slug: "",
    id: String(id),
  }));

  return (
    <section className={styles.container}>
      <h2 className={`${styles.title} ${baiJamjuree.className}`}>
        My <span>projects</span>{" "}
      </h2>
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
      <button className={styles.more}>
        See More
        <Image src={arrowDownSvg} alt="Expand" loading="lazy" />
      </button>
    </section>
  );
};

export default Projects;

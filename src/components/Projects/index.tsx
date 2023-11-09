import ProjectCard from "@/components/ProjectCard";
import { baiJamjuree } from "@/fonts";
import Link from "next/link";
import styles from "./styles.module.scss";

import arrowDownSvg from "@/assets/arrow-down.svg";

import type { Project } from "@/types";
import Image from "next/image";
import { performRequest } from "@/lib/cms";

const PROJECTS_QUERY = `
	query {
		allProjects (first : 4 ) {
			id
			name
			image{
				url
				blurUpThumb
				alt
			}
			demo
			repository
			stack
			company
			description
			slug
		}
	}

`;

const getProjects = async () => {
  const { allProjects } = await performRequest<{
    allProjects: Project[];
  }>({
    query: PROJECTS_QUERY,
  });
  return allProjects;
};

const Projects = async () => {
  const projects = await getProjects();

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
      <Link href={"/projects/all"} className={styles.more}>
        See More
        <Image src={arrowDownSvg} alt="Expand" loading="lazy" />
      </Link>
    </section>
  );
};

export default Projects;

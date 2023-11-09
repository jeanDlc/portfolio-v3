import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { baiJamjuree, sora } from "@/fonts";
import { performRequest } from "@/lib/cms";
import RightArrow from "@/components/icons/right-arrow";
import styles from "./styles.module.scss";

import type { Project } from "@/types";

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
        <p className={sora.className}>View all projects</p>
        <RightArrow />
      </Link>
    </section>
  );
};

export default Projects;

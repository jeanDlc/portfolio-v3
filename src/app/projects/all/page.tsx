import { performRequest } from "@/lib/cms";
import { baiJamjuree } from "@/fonts";
import GithubIcon from "@/components/icons/github";
import UpRightArrowIcon from "@/components/icons/up-right-arrow";
import HorizontalLink from "@/components/HorizontalLink";

import styles from "./styles.module.scss";

import type { Project } from "@/types";

const ALL_PROJECTS_QUERY = `
	query {
		allProjects {
			id
			name
			demo
			repository
			stack
			company
		}
	}

`;

const getAllProjects = async () => {
  const { allProjects } = await performRequest<{
    allProjects: Pick<
      Project,
      "id" | "name" | "demo" | "repository" | "stack" | "company"
    >[];
  }>({
    query: ALL_PROJECTS_QUERY,
    variables: {},
  });
  return allProjects;
};

export default async function AllProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div>
      <main className={styles.main}>
        <HorizontalLink direction="back" route="/" text="jeanDLC" />
        <h1 className={`${styles.title} ${baiJamjuree.className}`}>
          My <span>projects</span>{" "}
        </h1>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th> # </th>
                <th> project </th>
                <th className={styles.lg}> made at </th>
                <th className={styles.lg}> Built with </th>
                <th className={styles.md}> links </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, idx) => (
                <tr key={project.id}>
                  <td> {idx + 1} </td>
                  <td>
                    <p className={`${styles.md} ${styles["project-name"]}`}>
                      {project.name}
                    </p>
                    <a
                      href={project.demo}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className={`${styles.demo} ${styles["project-name"]} ${styles["only-mobile"]}`}
                    >
                      {project.name}
                      <UpRightArrowIcon />
                    </a>
                  </td>
                  <td className={styles.lg}> {project.company || "-"} </td>
                  <td className={styles.lg}>
                    <div className={styles["stack-list"]}>
                      {project.stack.map((tech) => (
                        <span className={styles.stack} key={tech}>
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className={styles.md}>
                    <div className={styles.links}>
                      <a
                        className={styles.demo}
                        target="_blank"
                        href={project.demo}
                      >
                        {new URL(project.demo).host}
                        <UpRightArrowIcon />
                      </a>
                      {project.repository && (
                        <a
                          target="_blank"
                          href={project.repository}
                          title="Visit github"
                          className={styles.github}
                        >
                          <GithubIcon />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

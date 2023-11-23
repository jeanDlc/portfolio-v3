import Image from "next/image";
import ClipIcon from "@/components/icons/clip";
import githubSvg from "@/assets/github.svg";
import styles from "./styles.module.scss";
import { baiJamjuree } from "@/fonts";
import UpRightArrowIcon from "@/components/icons/up-right-arrow";

import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  const { description, name, stack, demo, repository, image } = project;

  return (
    <article className={styles.container}>
      <a
        className={styles.action}
        href={demo}
        target="_blank"
        rel="noreferrer nofollow"
      >
        <header className={styles.cover}>
          <Image src={image.url} fill alt={`Preview of project ${name}`} />
        </header>
        <h3 className={`${baiJamjuree.className} ${styles.title}`}>
          {" "}
          {name}{" "}
          <span className={styles.redirect}>
            <UpRightArrowIcon />
          </span>{" "}
        </h3>

        <p className={styles.description}> {description} </p>
        <ul className={styles.stack}>
          {stack.map((tech) => (
            <li key={tech}> {tech} </li>
          ))}
        </ul>
      </a>
      <footer className={styles.links}>
        <a
          href={demo}
          rel="noreferrer nofollow"
          target="_blank"
          className={styles["demo-button"]}
        >
          <span>
            <ClipIcon />
            <p>Demo</p>
          </span>
        </a>
        {repository && (
          <a
            href={repository}
            rel="noreferrer nofollow"
            target="_blank"
            title={`Visit repository of ${name}`}
          >
            <Image loading="lazy" alt="Repository" src={githubSvg} />
          </a>
        )}
      </footer>
    </article>
  );
}

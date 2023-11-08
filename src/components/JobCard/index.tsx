import { sora } from "@/fonts";
import styles from "./styles.module.scss";
import Image from "next/image";
import redirectArrowSvg from "@/assets/up-right-arrow.svg";

import type { Job } from "@/types";
import UpRightArrowIcon from "@/components/icons/up-right-arrow";

export default function JobCard({ job }: { job: Job }) {
  const { company, description, role, stack, url } = job;
  return (
    <article className={styles.container}>
      <div className={styles.card}>
        <a
          className={styles["heading-wrapper"]}
          href={url}
          target="_blank"
          rel="noreferrer nofollow"
        >
          <h3 className={`${styles.heading} ${sora.className}`}> {company} </h3>
          <span aria-hidden>
            <UpRightArrowIcon />
          </span>
        </a>

        <p className={styles.role}> {role} </p>
        <p className={styles.description}> {description} </p>
        <ul className={styles.stack}>
          {stack.map((tech) => (
            <li key={tech}> {tech} </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

import { sora } from "@/fonts";
import styles from "./styles.module.scss";
import Image from "next/image";
import redirectArrowSvg from "@/assets/up-right-arrow.svg";

import type { Job } from "@/types";
import UpRightArrowIcon from "@/components/icons/up-right-arrow";

export default function JobCard({ job }: { job: Job }) {
  const { company, description, role, stack, url } = job;
  return (
    <article>
      <a
        className={styles.container}
        href={url}
        target="_blank"
        rel="noreferrer nofollow"
      >
        <div className={styles.card}>
          <h3 className={`${styles.heading} ${sora.className}`}> {company} </h3>
          <span className={styles.redirect} aria-hidden>
            <UpRightArrowIcon />
          </span>

          <p className={styles.role}> {role} </p>
          <p className={styles.description}> {description} </p>
          <ul className={styles.stack}>
            {stack.map((tech) => (
              <li key={tech}> {tech} </li>
            ))}
          </ul>
        </div>
      </a>
    </article>
  );
}

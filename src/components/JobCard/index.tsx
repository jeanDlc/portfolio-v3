import { sora } from "@/fonts";
import styles from "./styles.module.scss";

import type { Job } from "@/types";

export default function JobCard({ job }: { job: Job }) {
  const { company, description, role, stack } = job;
  return (
    <article className={styles.container}>
      <div className={styles.card}>
        <h3 className={`${styles.heading} ${sora.className}`}> {company} </h3>
        <h3 className={styles.role}> {role} </h3>
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

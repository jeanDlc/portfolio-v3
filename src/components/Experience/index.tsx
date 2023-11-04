import { Job } from "@/types";
import JobCard from "../JobCard";
import styles from "./styles.module.scss";
import { baiJamjuree } from "@/fonts";
import Image from "next/image";
import workSvg from "@/assets/work.svg";
import OrnamentIcon from "@/components/icons/ornament";

const jobs: Job[] = [
  {
    company: "ID Business Intelligence",
    role: "Frontend developer",
    description:
      "I crafted intuitive user interfaces for Electronic Invoicing, Financial Reporting, Recipes, Inventory, Purchasing, and Cash Management. Collaborating seamlessly with cross-functional teams, I empowered clients to efficiently manage operations, enhance customer interactions, and make informed decisions",
    from: "01 Nov, 2021",
    to: "01 Jun, 2022",
    stack: ["TypeScript", "React", "CSS", "HTML", "Styled Components"],
    url: "",
    id: 1,
  },
  {
    company: "Globant",
    role: "Web UI developer",
    description:
      "Collaborate with cross-functional teams, including designers, infrastructure teams, and product managers, to develop and enhance web-based user interfaces for Disney Media's digital platforms.",
    from: "01 Nov, 2021",
    to: "01 Jun, 2022",
    stack: ["TypeScript", "React", "Next js", "Docker", "Kubernetes"],
    url: "",
    id: 1,
  },
];

const Experience = () => {
  return (
    <section className={styles.experience}>
      <div className={styles["icon-wrapper"]}>
        <Image src={workSvg} alt="Work icon" loading="lazy" />
      </div>
      <h2 className={`${styles.heading} ${baiJamjuree.className}`}>
        Work <br /> Experience
        <div className={styles.ornament} aria-hidden>
          <OrnamentIcon />
        </div>
      </h2>

      <ul className={styles["job-list"]}>
        {jobs.map((job) => (
          <li className={styles["job-item"]} key={job.id}>
            <p className={styles.dates}>
              {job.from} to {job.to}
            </p>
            <JobCard job={job} />
          </li>
        ))}
      </ul>
      <div className={styles["ornament-end"]}>
        <div>
          <OrnamentIcon vertical />
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { Job } from "@/types";
import JobCard from "../JobCard";
import styles from "./styles.module.scss";
import { baiJamjuree } from "@/fonts";
import Image from "next/image";
import workSvg from "@/assets/work.svg";
import OrnamentIcon from "@/components/icons/ornament";
import { performRequest } from "@/lib/cms";
import { parseDates } from "@/utils/dates";

const JOBS_QUERY = `
	query {
		allJobs (first : 3 ) {
			id
			role
			company
			description
			url
			from
			to
			stack
		}
	}

`;

const getJobs = async () => {
  const { allJobs } = await performRequest<{
    allJobs: Job[];
  }>({
    query: JOBS_QUERY,
    variables: {},
  });
  return allJobs;
};

const Experience = async () => {
  const jobs = await getJobs();

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
            <p className={styles.dates}>{parseDates(job.from, job.to)}</p>
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

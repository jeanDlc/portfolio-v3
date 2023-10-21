import LinkedinIcon from "@/components/icons/linkedin";
import GmailIcon from "@/components/icons/gmail";
import GithubIcon from "@/components/icons/github";

import styles from "./styles.module.scss";

export default function ContactList() {
  const infoByAction = {
    linkedin: "Visit LinkedIn profile and reach out",
    gmail: "Contact via email",
    github: "Visit Github repository",
  };

  return (
    <ul className={styles.list}>
      <a href="#" title={infoByAction.linkedin}>
        <span className="hidden"> {infoByAction.linkedin} </span>
        <LinkedinIcon />
      </a>
      <a href="mailto:todo@example.com" title={infoByAction.gmail}>
        <span className="hidden"> {infoByAction.gmail} </span>
        <GmailIcon />
      </a>
      <a href="#" title={infoByAction.github}>
        <span className="hidden"> {infoByAction.github} </span>
        <GithubIcon />
      </a>
    </ul>
  );
}

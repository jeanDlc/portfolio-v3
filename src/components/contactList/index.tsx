import LinkedinIcon from "@/components/icons/linkedin";
import GmailIcon from "@/components/icons/gmail";
import GithubIcon from "@/components/icons/github";
import { performRequest } from "@/lib/cms";
import styles from "./styles.module.scss";

import type { About } from "@/types";

const CONTACT_LINKS_QUERY = `
	query {
		aboutMe {
			contact
		}
	}

`;

const getContactData = async () => {
  const {
    aboutMe: { contact },
  } = await performRequest<{
    aboutMe: Pick<About, "contact">;
  }>({
    query: CONTACT_LINKS_QUERY,
  });
  return contact;
};

export default async function ContactList() {
  const links = await getContactData();

  const infoByAction = {
    linkedin: "Visit LinkedIn profile and reach out",
    gmail: "Contact via email",
    github: "Visit Github repository",
  };

  return (
    <ul className={styles.list}>
      <a
        href={links.linkedin}
        target="_blank"
        rel="noreferrer nofollow"
        title={infoByAction.linkedin}
      >
        <span className="hidden"> {infoByAction.linkedin} </span>
        <LinkedinIcon />
      </a>
      <a href={`mailto:${links.gmail}`} title={infoByAction.gmail}>
        <span className="hidden"> {infoByAction.gmail} </span>
        <GmailIcon />
      </a>
      <a
        href={links.github}
        target="_blank"
        rel="noreferrer nofollow"
        title={infoByAction.github}
      >
        <span className="hidden"> {infoByAction.github} </span>
        <GithubIcon />
      </a>
    </ul>
  );
}

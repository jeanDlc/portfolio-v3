import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import ContactList from "@/components/contactList";
import CvButton from "@/components/CvButton";
import { performRequest } from "@/lib/cms";

import styles from "./styles.module.scss";

import type { About } from "@/types";

const INTRODUCTION_QUERY = `
	query {
		aboutMe {
			introduction
		}
	}

`;

const getSidebarIntroductoryData = async () => {
  const { aboutMe: data } = await performRequest<{
    aboutMe: Pick<About, "introduction">;
  }>({
    query: INTRODUCTION_QUERY,
  });
  return data;
};

const Sidebar = async () => {
  const { introduction } = await getSidebarIntroductoryData();

  return (
    <header className={styles.container}>
      <Logo />
      <p className={styles.description}>{introduction}</p>
      <section className={styles.actions}>
        <ContactList />
        <CvButton />
      </section>

      <Navbar />
    </header>
  );
};

export default Sidebar;

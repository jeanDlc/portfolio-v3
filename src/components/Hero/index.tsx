import { baiJamjuree, sora } from "@/fonts";
import PeruFlagIcon from "@/components/icons/peruFlag";
import LocationIcon from "@/components/icons/location";
import Logo from "@/components/Logo";
import ContactList from "@/components/contactList";
import CvButton from "@/components/CvButton";
import { performRequest } from "@/lib/cms";
import styles from "./styles.module.scss";

import type { About } from "@/types";

const ABOUT_QUERY = `
	query {
		aboutMe {
			languages
      role
      introduction
      skills
		}
	}

`;

const getAboutData = async () => {
  const { aboutMe } = await performRequest<{
    aboutMe: Pick<About, "languages" | "role" | "introduction" | "skills">;
  }>({
    query: ABOUT_QUERY,
  });
  return aboutMe;
};

const Hero = async () => {
  const { introduction, languages, role, skills } = await getAboutData();

  return (
    <>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div>
            <header>
              <ul>
                <li className={styles.location}>
                  <LocationIcon />
                  <PeruFlagIcon />
                  <p>Perú</p>
                </li>
                <span>{"/"}</span>
                <li> {languages.join(" - ")} </li>
              </ul>
            </header>
            <h2 className={baiJamjuree.className}> {role} </h2>
            <p className={styles.desc}>{introduction}</p>
            <ul className={styles.stack}>
              {skills.map((tech) => (
                <li className={sora.className} key={tech}>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
            <div className={styles["contact-list-wrapper"]}>
              <ContactList />
            </div>
          </div>
        </section>
      </div>
      <div className={styles["button-container"]}>
        <CvButton />
      </div>
    </>
  );
};

export default Hero;

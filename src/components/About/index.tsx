import styles from "./styles.module.scss";
import avatarSvgPath from "@/assets/avatar.svg";
import { performRequest } from "@/lib/cms";
import Image from "next/image";

import type { About } from "@/types";

const ABOUT_QUERY = `
	query {
		aboutMe {
			name
      lastname
      role
		}
	}

`;

const getAboutData = async () => {
  const { aboutMe } = await performRequest<{
    aboutMe: Pick<About, "name" | "lastname" | "role">;
  }>({
    query: ABOUT_QUERY,
  });
  return aboutMe;
};

const About = async () => {
  const { name, lastname, role } = await getAboutData();

  const fullName = `${name} ${lastname}`;

  return (
    <article className={styles.about}>
      <div className={styles["avatar-wrapper"]}>
        <Image src={avatarSvgPath} alt="Avatar" loading="lazy" />
      </div>
      <p className={styles.text}>
        <br />
        Hi, my name is {fullName}, I am a {role}. Since I began my journey, I
        have had the privilege of creating
        <span>
          web solutions for national and international companies such as IDBI
          and currently Globant
        </span>
        If you want to build the ideal website for your business or are looking
        for a {role}, reach me out and we will create amazing technology
        together!
      </p>
    </article>
  );
};

export default About;

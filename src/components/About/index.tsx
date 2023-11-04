import styles from "./styles.module.scss";
import avatarSvgPath from "@/assets/avatar.svg";
import Image from "next/image";

const About = () => {
  return (
    <article className={styles.about}>
      <div className={styles["avatar-wrapper"]}>
        <Image src={avatarSvgPath} alt="Avatar" loading="lazy" />
      </div>
      <p className={styles.text}>
        Hi, my name is Jean Pierre de la Cruz, I am a frontend developer Since
        beginning
        <span>
          my journey as developer , I have ve done many web projects, and I
          proud of my progress
        </span>
        I love the web technologies and the constant work I consider sel-taught
        learning as my best way of acquiring knowledge If you wanna get the
        ideal website for your business or are looking for a frontend developer,
        please contact me, we can create amazing things together!
      </p>
    </article>
  );
};

export default About;

import LogoIcon from "@/components/icons/logoIcon";
import GmailIcon from "@/components/icons/gmail";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";

import styles from "./styles.module.scss";
import ui from "@/utils/ui.module.scss";
import Navbar from "../Navbar";

const Sidebar = () => {
  return (
    <header className={styles.container}>
      <h1>
        <LogoIcon />
      </h1>
      <p className={styles.description}>
        I am a frontend developer Since beginning my journey as developer , I
        have done many web projects, and I proud of my progress
      </p>
      <section className={styles.actions}>
        <ul>
          <a href="#" title="Reach out via LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="mailto:todo@example.com" title="Reach out via email">
            <GmailIcon />
          </a>
          <a href="#" title="Visit Github repository">
            <GithubIcon />
          </a>
        </ul>
        <button className={ui["button-primary"]}>Download CV</button>
      </section>

      <Navbar />
    </header>
  );
};

export default Sidebar;

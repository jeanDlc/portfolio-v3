import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import ContactList from "@/components/contactList";

import styles from "./styles.module.scss";
import ui from "@/utils/ui.module.scss";

const Sidebar = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <p className={styles.description}>
        I am a frontend developer Since beginning my journey as developer , I
        have done many web projects, and I proud of my progress
      </p>
      <section className={styles.actions}>
        <ContactList />
        <button className={ui["button-primary"]}>Download CV</button>
      </section>

      <Navbar />
    </header>
  );
};

export default Sidebar;

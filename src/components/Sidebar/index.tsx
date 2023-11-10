import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import ContactList from "@/components/contactList";
import { baiJamjuree } from "@/fonts";
import LocationIcon from "@/components/icons/location";
import PeruFlagIcon from "@/components/icons/peruFlag";
import CvButton from "@/components/CvButton";

import styles from "./styles.module.scss";

const Sidebar = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <div className={styles.info}>
        <ul className={styles.aditional}>
          <li className={styles.location}>
            <LocationIcon />
            <PeruFlagIcon />
            <p>Perú</p>
          </li>
          <span>{"/"}</span>
          <li> {`Spanish - English`} </li>
        </ul>
        <h2 className={baiJamjuree.className}>Frontend developer</h2>
      </div>
      <p className={styles.description}>
        I am a frontend developer Since beginning my journey as developer , I
        have done many web projects, and I proud of my progress
      </p>
      <section className={styles.actions}>
        <ContactList />
        <CvButton />
      </section>

      <Navbar />
    </header>
  );
};

export default Sidebar;

import PeruFlagIcon from "@/components/icons/peruFlag";
import LocationIcon from "@/components/icons/location";
import Logo from "@/components/Logo";
import { baiJamjuree, sora } from "@/fonts";
import ui from "@/utils/ui.module.scss";

import styles from "./styles.module.scss";
import ContactList from "@/components/contactList";

const Hero = () => {
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
                <li> {`Spanish - English`} </li>
              </ul>
            </header>
            <h2 className={baiJamjuree.className}>Frontend developer</h2>
            <p className={styles.desc}>
              I am a frontend developer Since beginning my journey as developer
              , I have done many web projects, and I proud of my progress
            </p>
            <ul className={styles.stack}>
              {[
                "JavaScript",
                "CSS",
                "HTML",
                "React Js",
                "Bootstrap",
                "Material UI",
              ].map((stack) => (
                <li className={sora.className} key={stack}>
                  <span>{stack}</span>
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
        <button className={ui["button-primary"]}>Download CV</button>
      </div>
    </>
  );
};

export default Hero;

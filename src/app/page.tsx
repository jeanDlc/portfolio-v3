import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";

import styles from "./page.module.scss";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { PageSection } from "@/constants";
import MobileNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.grid}>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <div>
        <main>
          <div className={styles["navbar-container"]}>
            <MobileNavbar />
          </div>
          <div id={PageSection.HOME} className={styles.section_variant}>
            <Hero />
          </div>
          <div id={PageSection.ABOUT} className={styles.section}>
            <About />
          </div>
          <div id={PageSection.EXPERIENCE} className={styles.section_variant}>
            <Experience />
          </div>
          <div id={PageSection.PROJECTS} className={styles.section}>
            <Projects />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

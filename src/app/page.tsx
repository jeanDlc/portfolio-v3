import Sidebar from "@/components/Sidebar";
import Hero from "@/components/hero";

import styles from "./page.module.scss";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import { PageSection } from "@/constants";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <aside className={styles.sidebar}>
            <Sidebar />
          </aside>
          <main className={styles.sections}>
            <div id={PageSection.HOME} className={styles.section}>
              <Hero />
            </div>
            <div id={PageSection.ABOUT} className={styles.section}>
              <About />
            </div>
            <div id={PageSection.EXPERIENCE} className={styles.section}>
              <Experience />
            </div>
            <div id={PageSection.PROJECTS} className={styles.section}>
              <Projects />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

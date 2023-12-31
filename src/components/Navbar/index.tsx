"use client";
import { PageSection, orderedSections } from "@/constants";
import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./styles.module.scss";

/**
 * @example
 * Usage example:
 * Renders a VerticalBar component with 4 total bars and the 1st bar as current.
 * <VerticalBar n={4} current={1} />
 */
const VerticalBar = ({ current, n }: { n: number; current: number }) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.style.height = `calc(100%/${n})`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.style.transform = `translateY(${(current - 1) * 100}%)`;
    }
  }, [current]);

  return (
    <div className={styles.bar}>
      <span ref={spanRef}></span>
    </div>
  );
};

const ratios = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => n / 10);

export default function Navbar() {
  //anchor refs
  const homeRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const experienceRef = useRef<HTMLAnchorElement>(null);
  const projectsRef = useRef<HTMLAnchorElement>(null);

  const [currentSection, setCurrentSection] = useState(PageSection.HOME);

  const refById = {
    [PageSection.HOME]: homeRef,
    [PageSection.ABOUT]: aboutRef,
    [PageSection.EXPERIENCE]: experienceRef,
    [PageSection.PROJECTS]: projectsRef,
  } as const;

  function changeNav(entries: IntersectionObserverEntry[]) {
    const viewport50percent = window.innerHeight * 0.5;

    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id") as PageSection;

      if (
        entry.isIntersecting &&
        entry.intersectionRect.height > viewport50percent
      ) {
        Object.values(refById).forEach((anchorRef) => {
          if (anchorRef.current) {
            anchorRef.current.classList.remove(styles.active);
          }
        });

        setCurrentSection(id);

        refById[id].current?.classList.add(styles.active);
      }
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(changeNav, {
      threshold: ratios,
    });

    const sectionsToObserve = [
      PageSection.HOME,
      PageSection.ABOUT,
      PageSection.EXPERIENCE,
      PageSection.PROJECTS,
    ].map((key) => document.getElementById(key));

    sectionsToObserve.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedSectionPosition = useMemo(() => {
    return orderedSections.indexOf(currentSection) + 1;
  }, [currentSection]);

  return (
    <div className={styles["nav-container"]}>
      <VerticalBar
        current={selectedSectionPosition}
        n={orderedSections.length}
      />
      <nav className={styles.nav}>
        <div>
          <a ref={homeRef} href={`#${PageSection.HOME}`}>
            Home
          </a>
        </div>
        <div>
          <a ref={aboutRef} href={`#${PageSection.ABOUT}`}>
            About
          </a>
        </div>
        <div>
          <a ref={experienceRef} href={`#${PageSection.EXPERIENCE}`}>
            Experience
          </a>
        </div>
        <div>
          <a ref={projectsRef} href={`#${PageSection.PROJECTS}`}>
            Projects
          </a>
        </div>
      </nav>
    </div>
  );
}

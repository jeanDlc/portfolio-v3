"use client";
import { PageSection } from "@/constants";
import { useEffect, useRef } from "react";

import styles from "./styles.module.scss";

export default function Navbar() {
  //anchor refs
  const homeRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const experienceRef = useRef<HTMLAnchorElement>(null);
  const projectsRef = useRef<HTMLAnchorElement>(null);

  const refById = {
    [PageSection.HOME]: homeRef,
    [PageSection.ABOUT]: aboutRef,
    [PageSection.EXPERIENCE]: experienceRef,
    [PageSection.PROJECTS]: projectsRef,
  };

  function changeNav(
    entries: IntersectionObserverEntry[],
    _: IntersectionObserver,
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        Object.values(refById).forEach((anchorRef) => {
          if (anchorRef.current) {
            anchorRef.current.classList.remove(styles.active);
          }
        });

        const id = entry.target.getAttribute("id") as PageSection;

        refById[id].current?.classList.add(styles.active);
      }
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(changeNav, { threshold: 0.5 });

    const sections = [
      PageSection.HOME,
      PageSection.ABOUT,
      PageSection.EXPERIENCE,
      PageSection.PROJECTS,
    ].map((key) => document.getElementById(key));

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className={styles["nav-container"]}>
      <div className={styles.bar}>
        <span></span>
      </div>
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

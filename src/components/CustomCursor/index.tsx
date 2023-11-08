"use client";

import { useEffect, useRef } from "react";

import styles from "./styles.module.scss";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const isDesktop = useMediaQuery("(width>=768px)");

  const canUseAnimations = useMediaQuery(
    "(prefers-reduced-motion: no-preference)",
  );

  const handleMouseMove = (e: MouseEvent) => {
    const xPix = e.clientX + "px";
    const yPix = `${window.scrollY + e.clientY}px`;

    //original color rgba(29, 78, 216, 0.15)

    if (cursorRef.current) {
      cursorRef.current.style.background = `radial-gradient(600px at ${xPix} ${yPix}, rgba(25, 68, 180, 0.15), transparent 80%)`;
    }
  };

  useEffect(() => {
    //do calculation only in desktop as the custom cursor is only visible for that screen size
    if (isDesktop && canUseAnimations) {
      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isDesktop, canUseAnimations]);
  return <div ref={cursorRef} className={styles.cursor}></div>;
}

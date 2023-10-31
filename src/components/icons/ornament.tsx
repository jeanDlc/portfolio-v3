"use client";
import { useId } from "react";

export default function OrnamentIcon({ vertical }: { vertical?: boolean }) {
  const id = useId();

  if (vertical) {
    return (
      <svg
        width="39"
        height="126"
        viewBox="0 0 39 126"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="38"
          height="125"
          rx="19"
          stroke={`url(#${id})`}
        />
        <defs>
          <linearGradient
            id={id}
            x1="39"
            y1="63"
            x2="1.36881e-07"
            y2="63"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#13ADC7" />
            <stop offset="0.666667" stop-color="#6978D1" />
            <stop offset="1" stop-color="#945DD6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  //horizontal ornament
  return (
    <svg
      width="97"
      height="30"
      viewBox="0 0 97 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="96"
        height="29"
        rx="14.5"
        stroke={`url(#${id})`}
      />
      <defs>
        <linearGradient
          id={id}
          x1="97"
          y1="15"
          x2="3.40448e-07"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#13ADC7" />
          <stop offset="0.666667" stop-color="#6978D1" />
          <stop offset="1" stop-color="#945DD6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

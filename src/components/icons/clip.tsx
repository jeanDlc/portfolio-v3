"use client";
import { useId } from "react";

export default function ClipIcon() {
  const linearGradientId = useId();

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.657 11.828L13.243 10.414L14.657 9C15.0285 8.62856 15.3231 8.18759 15.5241 7.70228C15.7252 7.21696 15.8286 6.69681 15.8286 6.1715C15.8286 5.6462 15.7252 5.12605 15.5241 4.64073C15.3231 4.15542 15.0285 3.71445 14.657 3.343C14.2856 2.97156 13.8446 2.67691 13.3593 2.47589C12.874 2.27487 12.3538 2.1714 11.8285 2.1714C11.3032 2.1714 10.7831 2.27487 10.2977 2.47589C9.81242 2.67691 9.37146 2.97156 9.00001 3.343L7.58601 4.757L6.17201 3.343L7.58601 1.929C8.71432 0.818923 10.2356 0.199659 11.8184 0.206104C13.4012 0.21255 14.9174 0.844181 16.0366 1.96341C17.1558 3.08265 17.7875 4.5988 17.7939 6.18162C17.8004 7.76444 17.1811 9.28569 16.071 10.414L14.657 11.828ZM11.828 14.657L10.414 16.071C9.85853 16.6356 9.19676 17.0846 8.46688 17.3922C7.73699 17.6998 6.95343 17.8598 6.16139 17.863C5.36936 17.8662 4.58452 17.7126 3.85215 17.411C3.11979 17.1094 2.45438 16.6658 1.89432 16.1057C1.33426 15.5456 0.890634 14.8802 0.589022 14.1479C0.287411 13.4155 0.133788 12.6307 0.137013 11.8386C0.140238 11.0466 0.300248 10.263 0.607813 9.53314C0.915378 8.80325 1.36441 8.14148 1.92901 7.586L3.34301 6.172L4.75701 7.586L3.34301 9C2.97157 9.37145 2.67692 9.81242 2.4759 10.2977C2.27488 10.783 2.17141 11.3032 2.17141 11.8285C2.17141 12.3538 2.27488 12.874 2.4759 13.3593C2.67692 13.8446 2.97157 14.2856 3.34301 14.657C3.71446 15.0284 4.15543 15.3231 4.64074 15.5241C5.12605 15.7251 5.64621 15.8286 6.17151 15.8286C6.69681 15.8286 7.21697 15.7251 7.70229 15.5241C8.1876 15.3231 8.62857 15.0284 9.00001 14.657L10.414 13.243L11.828 14.657ZM11.828 4.757L13.243 6.172L6.17201 13.242L4.75701 11.828L11.828 4.758V4.757Z"
        fill={`url(#${linearGradientId})`}
      />
      <defs>
        <linearGradient
          id={linearGradientId}
          x1="17.794"
          y1="9.03456"
          x2="0.136963"
          y2="9.03456"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="0.666667" stopColor="#6978D1" />
          <stop offset="1" stopColor="#945DD6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
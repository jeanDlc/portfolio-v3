"use client";
import useMediaQuery from "@/hooks/useMediaQuery";

const UpRightArrowIcon = () => {
  const isMobile = useMediaQuery("(width<768px)");

  const size = isMobile ? "12" : "16";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3.5L5 17.5"
        stroke="#18ABC8"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13.77V3.5H8.73"
        stroke="#18ABC8"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UpRightArrowIcon;

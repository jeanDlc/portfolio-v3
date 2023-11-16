import Link from "next/link";
import RightArrow from "../icons/right-arrow";
import { sora } from "@/fonts";

import styles from "./styles.module.scss";

const HorizontalLink = ({
  route,
  direction,
  text,
}: {
  route: string;
  direction: "back" | "forth";
  text: string;
}) => {
  return (
    <Link href={route} className={styles.link}>
      {direction === "back" && (
        <div className={styles.back}>
          <RightArrow />
        </div>
      )}
      <p className={sora.className}> {text} </p>
      {direction === "forth" && (
        <div className={styles.forth}>
          <RightArrow />
        </div>
      )}
    </Link>
  );
};

export default HorizontalLink;

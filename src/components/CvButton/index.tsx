import UpRightArrowIcon from "../icons/up-right-arrow";
import styles from "./styles.module.scss";

export default async function CvButton() {
  return (
    <a
      href={"/resume/api"}
      target="_blank"
      rel="noreferrer nofollow"
      className={styles.button}
    >
      Visualize CV <UpRightArrowIcon />
    </a>
  );
}

import LogoIcon from "@/components/icons/logoIcon";
import styles from "./styles.module.scss";

export default function Logo() {
  return (
    <h1>
      <span className={styles.hidden}>Jean Pierre de la Cruz Portfolio</span>
      <LogoIcon />
    </h1>
  );
}

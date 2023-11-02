import styles from "./styles.module.scss";
import { ibmPlexSans400 } from "@/fonts";
import ContactList from "../contactList";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={ibmPlexSans400.className}>Reach me out</p>
      <ContactList />
    </footer>
  );
}

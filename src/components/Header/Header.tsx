import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  let title = "Dashboard";

  if (pathname.includes("/results/")) {
    title = "Results";
  } else if (pathname.includes("/finalize/")) {
    title = "Finalize";
  }

  return (
    <header>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
}

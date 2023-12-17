import { Link } from "react-router-dom";
import styles from "./Back.module.css";

export const Back = () => {
  return (
    <Link to={"/"} className={styles.back}>
      Back
    </Link>
  );
};

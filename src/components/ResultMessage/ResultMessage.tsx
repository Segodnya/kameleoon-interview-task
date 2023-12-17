import { MouseEventHandler } from "react";
import Button from "../Button/Button";
import styles from "./ResultMessage.module.css";

interface IResultMessageProps {
  handleReset: MouseEventHandler<HTMLButtonElement>;
}

const ResultMessage = ({ handleReset }: IResultMessageProps) => {
  return (
    <section className={styles.section}>
      <p className={styles.p}>Your search did not match any results.</p>
      <Button onClick={handleReset}>Reset</Button>
    </section>
  );
};

export default ResultMessage;

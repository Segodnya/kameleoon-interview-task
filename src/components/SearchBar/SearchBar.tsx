import { ChangeEvent } from "react";
import styles from "./SearchBar.module.css";

interface ISearchBarProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  itemCount: number;
}

const SearchBar = ({ value, onChange, itemCount }: ISearchBarProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}></div>
      <input
        className={styles.input}
        placeholder="What test are you looking for?"
        value={value}
        onChange={handleInputChange}
      />
      <span className={styles.span}>{itemCount} tests</span>
    </div>
  );
};

export default SearchBar;

import { ChangeEvent } from "react";

interface ISearchBarProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange }: ISearchBarProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <input
      placeholder="What test are you looking for?"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;

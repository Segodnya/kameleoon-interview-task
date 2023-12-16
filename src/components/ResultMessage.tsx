import { MouseEventHandler } from "react";

interface IResultMessageProps {
  handleReset: MouseEventHandler<HTMLButtonElement>;
}

const ResultMessage = ({ handleReset }: IResultMessageProps) => {
  return (
    <>
      <p>Your search did not match any results.</p>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default ResultMessage;

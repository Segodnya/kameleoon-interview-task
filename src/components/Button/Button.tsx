import React, { ReactNode, ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  children: ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  secondary = false,
  children,
  ...rest
}) => {
  const buttonClass = classNames(styles.button, {
    [styles.secondary]: secondary,
  });

  return (
    <button className={buttonClass} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;

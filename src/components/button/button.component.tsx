import { FunctionComponent, MouseEvent } from "react";

export enum ButtonType {
  Primary = "bg-primary",
  Secondary = "bg-secondary",
}

export interface ButtonProps {
  children: JSX.Element | string;
  type?: ButtonType;
  classes?: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  classes,
  type = ButtonType.Primary,
  onClick,
}): JSX.Element => (
  <button
    className={`flex justify-center items-center py-1 px-4 rounded-full text-white ${type} ${classes}`}
    onClick={onClick}
  >
    {children}
  </button>
);

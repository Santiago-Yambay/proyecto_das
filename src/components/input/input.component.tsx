import { FC, ReactElement } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  label: ReactElement | string;
  register: UseFormRegisterReturn;
  type: string;
  children?: ReactElement;
};

export const Input: FC<InputProps> = ({
  label,
  register,
  type,
  children
}): JSX.Element => (
  <label className="mb-1">
    <strong className="block">{label}:</strong>
    <input
      {...register}
      type={type}
      autoComplete="off"
      className="w-full border bg-gray-50 border-gray-100 outline-none py-1 px-2"
    ></input>
    <div className="h-3 text-red pl-3">
      { children }
    </div>
  </label>
);

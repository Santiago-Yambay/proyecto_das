import { FC, ReactElement } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type SelectItem = {
  label: string;
  value: string;
};

type SelectProps = {
  label: ReactElement;
  register: UseFormRegisterReturn;
  items: SelectItem[];
  children?: ReactElement;
};

export const Select: FC<SelectProps> = ({
  label,
  register,
  items,
  children
}): JSX.Element => (
  <label className="mb-1">
    <strong className="block">{label}:</strong>
    <select
      {...register}
      className="w-full border bg-gray-50 border-gray-100 outline-none py-1 px-2"
    >
      {items.map((item: SelectItem) => (
        <option key={item.value} value={item.value}>{item.label}</option>
      ))}
    </select>
    <div className="h-3 text-red pl-3">
      { children }
    </div>
  </label>
);

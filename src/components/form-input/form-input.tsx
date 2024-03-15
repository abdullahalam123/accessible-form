import { FormInputProps } from "@/types";
import clsx from "clsx";
import { FC } from "react";

/**
 * @description Custom FormInput component
 * @param {FormInputProps} props - Props for the FormInput component
 * @returns {JSX.Element} - The rendered FormInput component
 */
export const FormInput: FC<FormInputProps> = ({
  label,
  id,
  type,
  register,
  error,
  placeholder,
  autoComplete,
  variant,
  className,
  ...rest
}) => {
  const baseClasses =
    variant === "primary"
      ? "border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[21.25rem]"
      : "border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[21.25rem]";

  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="font-semibold">{label}:</span>
      <input
        type={type}
        id={id}
        {...register(id)}
        aria-describedby={`${id}-description`}
        className={clsx(baseClasses, className)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...rest}
      />
      {error && (
        <p id={`${id}-description`} aria-live="polite" className="text-red-500">
          {error.message}
        </p>
      )}
    </label>
  );
};

import { FormInputProps } from "@/types";
import clsx from "clsx";
import { FC, useState } from "react";

import { FiEye, FiEyeOff } from "react-icons/fi";

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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const baseClasses =
    variant === "primary"
      ? "border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[21.25rem]"
      : "border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[21.25rem]";

  return (
    <label htmlFor={id} className="flex flex-col gap-2 relative">
      <span className="font-semibold">{label}:</span>
      <input
        type={showPassword ? "text" : type}
        id={id}
        {...register(id)}
        aria-describedby={`${id}-description`}
        className={clsx(baseClasses, className)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...rest}
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute right-5 top-12 p-0.5 transform -translate-y-1"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
          tabIndex={0}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      )}
      {error && (
        <p id={`${id}-description`} aria-live="polite" className="text-red-500">
          {error.message}
        </p>
      )}
    </label>
  );
};

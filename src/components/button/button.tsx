import React, { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";
import { ButtonProps } from "@/types";

/**
 * @description Custom Button component
 * @param {ButtonProps} props - Props for the Button component
 * @returns {JSX.Element} - The rendered Button component
 */
const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...rest
}) => {
  const baseClasses =
    variant === "primary"
      ? "bg-[#09090b] text-white py-2 px-4 rounded-md hover:bg-[#27272a] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      : "bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <button className={clsx(baseClasses, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;

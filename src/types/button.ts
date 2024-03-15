import React, { ButtonHTMLAttributes } from "react";
/**
 * Props for the Button component
 * @interface
 * @extends {ButtonHTMLAttributes<HTMLButtonElement>}
 * @property {React.ReactNode} children - The content to render inside the button
 * @property {string} [className] - Additional CSS classes to apply to the button
 * @property {'primary' | 'secondary'} [variant] - The visual variant of the button
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

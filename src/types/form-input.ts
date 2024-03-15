import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

/**
 * Props for the FormInput component
 * @interface
 * @extends {InputHTMLAttributes<HTMLInputElement>}
 * @property {string} label - The label text for the input field
 * @property {string} id - The unique identifier for the input field
 * @property {string} type - The type of the input field (e.g., "text", "email", "password")
 * @property {UseFormRegister<any>} register - The register function from react-hook-form to register the input field
 * @property {FieldError | undefined} [error] - The error object for the input field, if any
 * @property {string} placeholder - The placeholder text for the input field
 * @property {string} autoComplete - The autocomplete behavior for the input field
 * @property {string} [className] - Additional CSS classes to apply to the input field
 * @property {'primary' | 'secondary'} [variant] - The visual variant of the input field
 */
export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type: string;
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
  placeholder: string;
  autoComplete: string;
  className?: string;
  variant?: "primary" | "secondary";
}

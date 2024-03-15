/**
 * @interface
 * @typedef {Object} LinkTextProps
 * @property {string} text - The text to display.
 * @property {string} linkText - The text for the link.
 * @property {string} href - The URL the link points to.
 * @property {string} [className] - Additional CSS classes for styling.
 */
export interface LinkTextProps {
  text: string;
  linkText: string;
  href: string;
  className?: string;
}

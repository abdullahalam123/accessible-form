/**
 * Props for the LoginForm component
 * @interface
 * @property {Function} onSignup - Function called when the signup is successful
 */

export interface SignupFormProps {
  onSignup: (email: string, password: string) => void;
}

/**
 * Props for the LoginForm component
 * @interface
 * @property {Function} onLogin - Function called when the login is successful
 */

export interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

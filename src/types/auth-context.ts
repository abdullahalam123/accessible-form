/**
 * Props for the Button component
 * @interface
 * @property {string} email - The email of the user
 * @property {string} password - The password of the user
 */
export interface User {
  email: string;
  password: string;
}

/**
 * Interface representing authentication context type.
 * @interface
 * @property {User | null} currentUser - Current authenticated user or null.
 * @property {Function} login - Authenticates the user.
 * @property {Function} logout - Logs out the current user.
 * @property {Function} isAuthenticated - Check if user is authenticated.
 */
export interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: () => boolean;
}

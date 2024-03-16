"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { SignupFormData } from "@/types";
import { UseFormSetError } from "react-hook-form";

/**
 * @description Custom hook to handle signup functionality
 * @returns {{
 *   handleSignup: (data: SignupFormData, setError: UseFormSetError<SignupFormData>) => boolean,
 *   saveUsers: (users: User[]) => void
 * }}
 */
export const useSignup = () => {
  const STORED_USERS = "mockUsers";
  const { users, saveUsers } = useLocalStorage(STORED_USERS);

  /**
   * Handle signup form submission
   * @param {SignupFormData} data - Form data containing email and password
   * @param {UseFormSetError<SignupFormData>} setError - Function to set form errors
   * @returns {boolean} Returns true if the signup is successful, false otherwise
   */
  const handleSignup = (
    data: SignupFormData,
    setError: UseFormSetError<SignupFormData>
  ): boolean => {
    const { email, password } = data;

    const user = users.find((user) => user.email === email);

    if (user) {
      setError("email", {
        type: "onChange",
        message: "User already exists. Please log in instead.",
      });
      return false; // Signup failed
    } else {
      const newUser = { email, password };
      const updatedUsers = [...users, newUser];
      saveUsers(updatedUsers);
      return true; // Signup successful
    }
  };

  return { handleSignup };
};

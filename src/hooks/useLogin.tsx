"use client";

import { AuthContext } from "@/context/auth-context";
import { LoginFormData } from "@/types";
import { useContext } from "react";
import { UseFormSetError, UseFormSetFocus } from "react-hook-form";

/**
 * @description Custom hook to handle login functionality
 * @returns {{
 *   handleLogin: (data: LoginFormData, setError: UseFormSetError<LoginFormData>, setFocus: UseFormSetFocus<LoginFormData>) => boolean
 * }}
 */
export const useLogin = () => {
  const { users } = useContext(AuthContext);

  /**
   * Handle login form submission
   * @param {LoginFormData} data - Form data containing email and password
   * @param {UseFormSetError<LoginFormData>} setError - Function to set form errors
   * @param {UseFormSetFocus<LoginFormData>} setFocus - Function to set form focus
   * @returns {boolean} Returns true if the login is successful, false otherwise
   */
  const handleLogin = (
    data: LoginFormData,
    setError: UseFormSetError<LoginFormData>,
    setFocus: UseFormSetFocus<LoginFormData>
  ): boolean => {
    const { email, password } = data;

    const user = users.find((user) => user.email === email);

    if (user) {
      if (user.password === password) {
        return true; // Login successful
      } else {
        setError("password", {
          type: "onChange",
          message: "Incorrect password.",
        });
        setFocus("password");
        return false; // Login failed
      }
    } else {
      setError("email", {
        type: "onChange",
        message: "No user with this email exists. Please sign up.",
      });
      setFocus("email");
      return false; // Login failed
    }
  };

  return { handleLogin };
};

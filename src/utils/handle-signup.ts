import { SignupFormData } from "@/types";
import { mockUsers } from "@/constants";
import { UseFormSetError } from "react-hook-form";

/**
 * Handle signup form submission
 * @param {SignupFormData} data - Form data containing email and password
 * @param {UseFormSetError<SignupFormData>} setError - Function to set form errors
 * @returns {boolean} Returns true if the signup is successful, false otherwise
 */
export const handleSignup = (
  data: SignupFormData,
  setError: UseFormSetError<SignupFormData>
): boolean => {
  const { email } = data;

  const user = mockUsers.find((user) => user.email === email);

  if (user) {
    setError("email", {
      type: "onChange",
      message: "User already exists. Please log in instead.",
    });
    return false; // Signup failed
  } else {
    return true; // Signup successful
  }
};

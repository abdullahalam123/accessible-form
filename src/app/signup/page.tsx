"use client";

import { SignupForm } from "@/components";

/**
 * @description SignupPage component representing the signup form.
 * @returns {JSX.Element} - The rendered Signup page.
 */
const SignupPage = () => {
  const handleSignup = (email: string, password: string) => {
    console.log("Signing up with:", email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center">Sign up</h1>
        <SignupForm onSignup={handleSignup} />
      </div>
    </div>
  );
};

export default SignupPage;

"use client";

import { LoginForm } from "@/components";

/**
 * @description LoginPage component representing the login form.
 * @returns {JSX.Element} - The rendered login page.
 */
const LoginPage = () => {
  const handleLogin = (email: string, password: string) => {
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center">Log in</h1>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;

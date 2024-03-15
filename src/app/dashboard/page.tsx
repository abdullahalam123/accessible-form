"use client";

import Button from "@/components/button/button";
import { AuthContext } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

/**
 * @description DashboardPage component representing the dashboard page.
 * @returns {JSX.Element} - The rendered DashboardPage component.
 */
const DashboardPage = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const { logout, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setMessage(
        isAuthenticated()
          ? "You are logged in. Welcome!"
          : "You are not logged in."
      );
    }, 100);
  }, [isAuthenticated]);

  /**
   * Handles the logout action.
   * Executes the logout function from the authentication context
   * and redirects the user to the login page.
   * @function handleLogout
   * @returns {void}
   */
  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  /**
   * Handles the login action.
   * Redirects the user to the login page.
   * @function handleLogin
   * @returns {void}
   */
  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        {isAuthenticated() ? "Dashboard" : "Please log in first"}
      </h1>

      <div className="mb-6" aria-live="polite">
        {message}
      </div>

      <Button onClick={isAuthenticated() ? handleLogout : handleLogin}>
        {isAuthenticated() ? "Logout" : "Log in"}
      </Button>
    </div>
  );
};

export default DashboardPage;

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * @description DashboardPage component representing the dashboard page.
 * @returns {JSX.Element} - The rendered DashboardPage component.
 */
const DashboardPage = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Welcome to the dashboard!");
    }, 100);
  }, []);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="mb-6" aria-live="polite">
        {message}
      </div>
      <button
        onClick={handleLogout}
        className="bg-[#09090b] text-white py-2 px-4 rounded-md hover:bg-[#27272a] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Log out
      </button>
    </div>
  );
};

export default DashboardPage;

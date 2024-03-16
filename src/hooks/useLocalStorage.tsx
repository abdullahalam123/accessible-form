"use client";

import { mockUsers } from "@/constants";
import { User } from "@/types";
import { useEffect, useState } from "react";

/**
 * @description Custom hook to load and save users to localStorage.
 * @param {string} storageKey - The key to use for accessing localStorage.
 *
 */
export const useLocalStorage = (storageKey: string) => {
  const [users, setUsers] = useState<User[]>(mockUsers);

  useEffect(() => {
    const storedUsers = localStorage.getItem(storageKey);
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, [storageKey]);

  const saveUsers = (newUsers: User[]) => {
    localStorage.setItem(storageKey, JSON.stringify(newUsers));
    setUsers(newUsers);
  };

  return { users, saveUsers };
};

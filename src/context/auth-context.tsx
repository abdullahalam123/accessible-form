"use client";

import { STORED_USERS } from "@/constants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { AuthContextType, User } from "@/types";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  login: () => false,
  logout: () => {},
  isAuthenticated: () => false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const { users } = useLocalStorage(STORED_USERS);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser) as User;
      setCurrentUser(parsedUser);
    }
  }, []);

  const login = (email: string, password: string) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setCurrentUser(user);
      if (typeof window !== "undefined") {
        localStorage.setItem("currentUser", JSON.stringify(user));
      }
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("currentUser");
    }
  };

  const isAuthenticated = () => {
    return !!currentUser;
  };

  const contextValue = {
    currentUser,
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextValue as AuthContextType}>
      {children}
    </AuthContext.Provider>
  );
};

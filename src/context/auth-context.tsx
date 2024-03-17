"use client";

import { STORED_USERS, mockUsers } from "@/constants";
import { AuthContextType, User } from "@/types";
import { isValidJSON } from "@/utils";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  login: () => false,
  logout: () => {},
  isAuthenticated: () => false,
  users: [],
  saveUsers: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [users, setUsers] = useState<User[]>(mockUsers);

  useEffect(() => {
    const storedUsers = localStorage.getItem(STORED_USERS);
    if (storedUsers && isValidJSON(storedUsers)) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser && isValidJSON(storedUser)) {
      const parsedUser = JSON.parse(storedUser) as User;
      setCurrentUser(parsedUser);
    }
  }, []);

  /**
   * @description Save users to local storage and update state.
   *
   * @param {User[]} newUsers - an array of users to save
   * @return {void}
   */
  const saveUsers = (newUsers: User[]) => {
    localStorage.setItem(STORED_USERS, JSON.stringify(newUsers));
    setUsers(newUsers);
  };

  /**
   * @description Logs in a user with the provided email and password.
   *
   * @param {string} email - the email of the user trying to log in
   * @param {string} password - the password of the user trying to log in
   * @return {boolean} true if login is successful, false otherwise
   */
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

  /**
   * @description Logs out the current user and removes it from local storage.
   */
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
    users,
    login,
    logout,
    isAuthenticated,
    saveUsers,
  };

  return (
    <AuthContext.Provider value={contextValue as AuthContextType}>
      {children}
    </AuthContext.Provider>
  );
};

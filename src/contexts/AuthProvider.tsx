import React, { useEffect, useState } from "react";
import { AuthContext, type User } from "./AuthContext";
import { deleteCookie, setCookie } from "../utils/cookie";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading,setLoading]= useState<boolean>(false)
  useEffect(() => {
    const storedUser = localStorage.getItem("auth");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    const accessToken = userData.accessToken
    const refresh = userData.refreshToken
    setCookie("accessToken", accessToken)
    setCookie("refresh_token", refresh)
  };

  const logout = () => {
    setUser(null);
     deleteCookie("accessToken")
     deleteCookie("refresh_token")
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,setLoading,loading }}>
      {children}
    </AuthContext.Provider>
  );
};

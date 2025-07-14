import { createContext } from "react";

export interface User {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiredAt: string
}

export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  loading: boolean,
  setLoading: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

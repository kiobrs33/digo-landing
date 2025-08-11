import { Dispatch } from "react";

export interface LoginDTO {
  email: string;
  password: string;
}

export interface User {
  userId: number;
  firstNames: string;
  lastNames: string;
  email: string;
  rol: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

export type AuthAction =
  | { type: "LOGIN"; payload: { user: User; token: string } }
  | { type: "LOGOUT" };

export interface AuthContextType {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}

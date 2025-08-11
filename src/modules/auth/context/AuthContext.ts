import { createContext, useContext } from "react";
import { AuthContextType } from "../types/authTypes";

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => useContext(AuthContext);

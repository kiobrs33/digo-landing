import { ReactNode, useEffect, useReducer } from "react";
import { AuthAction, AuthState } from "../types/authTypes";
import { AuthContext } from "./AuthContext";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  token: null,
};

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Initialize the state from localStorage if available
  const [state, dispatch] = useReducer(authReducer, initialState, (initial) => {
    const persisted = localStorage.getItem("authState");
    return persisted ? JSON.parse(persisted) : initial;
  });

  // Persist the state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

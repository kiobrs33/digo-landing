import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  children?: ReactNode;
  redirectTo?: string;
  isAllowed: boolean;
}

export const ProtectedRoute = ({
  children,
  redirectTo = "/",
  isAllowed = false,
}: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};

import { useContext } from "react";
import { Navigate, To } from "react-router-dom";
import { Authentication } from "./states/contexts/authContext";

type RouteProps = {
  children: JSX.Element;
  redirectTo: To;
};

// Protected Routes
export const PrivateRoute = ({ children, redirectTo }: RouteProps) => {
  const AuthGlobal = useContext(Authentication);
  return AuthGlobal.authState.loggedIn ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
};

// Login, Signup page
export const AuthRoute = ({ children, redirectTo }: RouteProps) => {
  const AuthGlobal = useContext(Authentication);
  return !AuthGlobal.authState.loggedIn ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
};

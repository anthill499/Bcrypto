import { initAuth } from "./reducers/authReducer";
import React from "react";
interface FromAPI {
  firstName: string;
  lastName: string;
  token: string;
  username: string;
  email: string;
}
interface AuthInterface {
  firstName: string;
  lastName: string;
  token: string;
  username: string;
  email: string;
  dispatch: React.Dispatch<FromAPI>;
}
const Authentication = React.createContext<AuthInterface>();

export { Authentication };

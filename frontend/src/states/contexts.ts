import { initAuth } from "./reducers/authReducer";
import React from "react";

interface AuthContext {
  id: string;
  firstName: string;
  lastName: string;
  token?: string;
  username: string;
  email: string;
  dispatch: Dispatch<Action>;
}
 
const Authentication = React.createContext();

export { Authentication };

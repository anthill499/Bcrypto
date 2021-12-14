import React, { useReducer } from "react";
import {
  authReducer,
  initAuth,
  authState,
  Action,
} from "../reducers/authReducer";

interface authContextType {
  authState: authState;
  dispatch?: React.Dispatch<Action>;
}

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const Authentication = React.createContext<authContextType | null>(null);

const AuthProvider = ({ children }: AuthContextProviderProps): JSX.Element => {
  const [authState, dispatch] = useReducer(authReducer, initAuth);
  return (
    <Authentication.Provider value={{ authState, dispatch }}>
      {children}
    </Authentication.Provider>
  );
};
export { AuthProvider, Authentication };

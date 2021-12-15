import React, { useReducer } from "react";
import {
  authReducer,
  initAuth,
  authState,
  AuthAction,
} from "../reducers/authReducer";

interface authContextType {
  authState: authState;
  dispatchAuth: React.Dispatch<AuthAction>;
}

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const Authentication = React.createContext<authContextType>({
  authState: initAuth,
  dispatchAuth: (): any => {},
});

const AuthProvider = ({ children }: AuthContextProviderProps): JSX.Element => {
  const [authState, dispatchAuth] = useReducer(authReducer, initAuth);
  return (
    <Authentication.Provider value={{ authState, dispatchAuth }}>
      {children}
    </Authentication.Provider>
  );
};
export { AuthProvider, Authentication };

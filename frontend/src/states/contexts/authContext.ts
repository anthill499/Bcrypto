import React, { useReducer } from "react";
import {
  authReducer,
  initAuth,
  authState,
  Action,
} from "../reducers/authReducer";

interface authContextType {
  auth: authState;
  dispatch: React.Dispatch<Action>;
}

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthContextProviderProps): JSX.Element => {
  const [auth, dispatch] = useReducer(authReducer, initAuth);
  const Authentication = React.createContext<authContextType>({
    auth,
    dispatch,
  });
  return <Authentication.Provider>{...children}</Authentication.Provider>;
};
export default AuthProvider;

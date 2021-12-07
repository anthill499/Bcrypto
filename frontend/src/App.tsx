import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Signup from "./components/session/signup";
import Signin from "./components/session/signin";
import { Authentication } from "./states/contexts";
import { authReducer, initAuth } from "./states/reducers/authReducer";

const App: React.FC = (): JSX.Element => {
  const [authState, authDispatch] = useReducer(authReducer, initAuth);
  return (
    <Authentication.Provider
      value={{
        ...authState,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </Authentication.Provider>
  );
};

export default App;

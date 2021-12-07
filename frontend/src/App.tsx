import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Signup from "./components/session/signup";
import Signin from "./components/session/signin";
import Home from "./components/homepage/home";
import { Authentication } from "./states/contexts";
import { authReducer, initAuth } from "./states/reducers/authReducer";

const App: React.FC = (): JSX.Element => {
  const [authState, dispatch] = useReducer(authReducer, initAuth);
  return (
    <Authentication.Provider value={{ ...authState, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Authentication.Provider>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Signup from "./components/session/signup";
import Signin from "./components/session/signin";
import Home from "./components/homepage/home";
import AuthProvider from "./states/contexts/authContext";

const App: React.FC = (): JSX.Element => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

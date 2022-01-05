import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Signup from "./components/session/signup";
import Signin from "./components/session/signin";
import Home from "./components/homepage/home";
import Loading from "./components/loading/loading";
import { AuthProvider } from "./states/contexts/authContext";
import { AuthRoute } from "./protectedRoutes";
const App: React.FC = (): JSX.Element => {
  useEffect(() => {
    const fetchNodeCoinData = async () => {
      const response = await fetch("/api/coins/ping", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const converted = await response.json();
      console.log(converted.toString());
    };
    fetchNodeCoinData();
  });
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/register"
            element={
              <AuthRoute redirectTo={"/home"}>
                <Signup />
              </AuthRoute>
            }
          />
          <Route
            path="/login"
            element={
              <AuthRoute redirectTo={"/home"}>
                <Signin />
              </AuthRoute>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

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
    window.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        window.open("https://leetcode.com/");
      }
    });
    return () =>
      window.removeEventListener("keydown", (event) => {
        if (event.code === "Space") {
          window.open("https://leetcode.com/");
        }
      });
  }, []);

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

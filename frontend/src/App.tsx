import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Signup from "./components/authentication/Signup";
import Signin from "./components/authentication/Signin";
import Home from "./components/homepage/home";
import Loading from "./components/loading/Loading";
import { AuthProvider } from "./states/contexts/authContext";
import { AuthRoute } from "./protectedRoutes";
import ProductContainer from "./components/product/Container";
const App: React.FC = (): JSX.Element => {
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
          <Route path="/platform" element={<ProductContainer />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

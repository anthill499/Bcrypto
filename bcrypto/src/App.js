/* FFFCF5 */
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/landing";
import { AuthContext, ThemeContext } from "./states/actions/contexts";
import Signup from "./components/Session/signup";
import Signin from "./components/Session/signin";

// create themes here for darkmode
function App() {
  return (
    <ThemeContext.Provider>
      <AuthContext.Provider value={{ test: "hello" }}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </HashRouter>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

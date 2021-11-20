/* FFFCF5 */
import React, { useReducer } from "react";
import { authReducer } from "./states/reducers/authReducer";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/landing";
import { AuthContext } from "./states/actions/contexts";
import Signup from "./components/Session/signup";
function App() {
  // const [authState, dispatchAuth] = useReducer(authReducer, null);
  return (
    <AuthContext.Provider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </HashRouter>
    </AuthContext.Provider>
  );
}

export default App;

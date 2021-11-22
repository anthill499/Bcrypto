/* FFFCF5 */
import React, { useReducer } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/landing";
import { AuthContext, ThemeContext } from "./states/actions/contexts";
import Signup from "./components/Session/signup";
import Signin from "./components/Session/signin";
import { themeReducer, initialTheme } from "./states/reducers/darkModeReducer";
import { changeTheme } from "./states/actions/themeActions";

function App() {
  const [theme, dispatchTheme] = useReducer(themeReducer, initialTheme);
  return (
    <ThemeContext.Provider
      value={{
        darkMode: theme.darkMode,
        currTheme: theme.currTheme,
        changeTheme: () => dispatchTheme(changeTheme()),
      }}
    >
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

import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Landing/landing";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

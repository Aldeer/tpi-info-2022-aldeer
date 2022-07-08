import { useEffect } from "react";
import { useCallApi } from "./hooks/useCallApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//componentes
import { Home } from "./pages/Home";

export const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
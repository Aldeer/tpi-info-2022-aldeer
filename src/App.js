import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/buscador" element={<Home />} />
      </Routes>
    </Router>
  );
};

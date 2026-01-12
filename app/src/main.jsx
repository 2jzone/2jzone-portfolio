// ✅ main.jsx additions
// Add this route alongside your existing ones.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import TechStack from "./pages/TechStack.jsx";
import Projects from "./pages/Projects.jsx"; // ✅ add

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} /> {/* ✅ add */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

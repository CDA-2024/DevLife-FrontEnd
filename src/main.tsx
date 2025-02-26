import { createRoot } from "react-dom/client";
import App from "./app/core/App.tsx";
import { StrictMode } from "react";
import "./assets/index.css";

localStorage.clear();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

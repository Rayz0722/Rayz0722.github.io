import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./motion.css";
import App from "./App.jsx";
import reloadIfStale from "./reloadIfStale";

reloadIfStale();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

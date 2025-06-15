import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ScrollProvider } from "./components/ScrollContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ScrollProvider>
  </StrictMode>,
);

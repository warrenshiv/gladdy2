import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { LoginProvider } from "./context/IsLoggedIn";
import { PriorityDisplayProvider } from './context/PriorityDisplay';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PriorityDisplayProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </PriorityDisplayProvider>
    </BrowserRouter>
  </StrictMode>
);

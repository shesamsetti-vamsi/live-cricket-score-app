import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MatchProvider } from "./context/MatchContext";
import { PinnedProvider } from "./context/PinnedContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MatchProvider>
        <PinnedProvider>
          <App />
        </PinnedProvider>
      </MatchProvider>
    </BrowserRouter>
  </React.StrictMode>
);

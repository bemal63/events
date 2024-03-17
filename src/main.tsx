import React from "react";
import ReactDOM from "react-dom/client";
import "./app/styles/index.scss";
import { App } from "app/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

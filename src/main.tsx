import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement === null) {
  throw new Error("No root element found");
}

const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// react 17.0.2

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback="loading...">
        <App />
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

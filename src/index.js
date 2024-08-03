// react 17.0.2

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n.js";
import { LanguageProvider } from "./LanguageContext.jsx";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback="loading...">
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

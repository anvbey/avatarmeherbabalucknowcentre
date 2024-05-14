// react 17.0.2

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Worker } from '@react-pdf-viewer/core';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <App />
      </Worker>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainContextProvider from "./contexts/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <MainContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MainContextProvider>
  </Router>
);

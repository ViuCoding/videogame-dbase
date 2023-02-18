import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("App")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Button from "./components/Button";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Button />
  </React.StrictMode>
);
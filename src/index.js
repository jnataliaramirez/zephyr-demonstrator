import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Menu from "./components/Menu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container flex flex-col justify-between">
      <Menu />
      <App />
    </div>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Menu from "./components/Menu";

import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <div className="container flex flex-col justify-between">
        <Menu />
        <App />
      </div>
    </HashRouter>
  </React.StrictMode>
);

import React from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { routes } from "../routes";

import "../assets/styles/global.scss";
import "../assets/styles/fonts.css";

const Loader = (
  <div style={{ width: "3rem", height: "3rem" }}>
    <span>Loading...</span>
  </div>
);

export default function App() {
  return (
    <React.Suspense fallback={Loader}>
      <Router>
        <Switch>{renderRoutes(routes)}</Switch>
      </Router>
    </React.Suspense>
  );
}

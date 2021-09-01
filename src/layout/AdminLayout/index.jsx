import React from "react";
import { renderRoutes } from "react-router-config";

import "./style.scss";

export default function AdminLayout(props) {
  const { route } = props;

  return <div id="layout">{renderRoutes(route.routes)}</div>;
}

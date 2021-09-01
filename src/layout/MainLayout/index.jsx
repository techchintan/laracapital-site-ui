import React from "react";
import { renderRoutes } from "react-router-config";

import "./style.scss";

export default function MainLayout(props) {
  const { route } = props;
  return (
    <>
      <div className="site-layout-background">{renderRoutes(route.routes)}</div>
    </>
  );
}

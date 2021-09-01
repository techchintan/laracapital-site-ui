import React from "react";
import { Layout } from "antd";
import { renderRoutes } from "react-router-config";

import "./style.scss";

const { Content } = Layout;

export default function AuthLayout(props) {
  const { route } = props;

  return (
    <>
      <Content className="site-layout">
        AuthLayout
        <div className="site-layout-background">
          {renderRoutes(route.routes)}
        </div>
      </Content>
    </>
  );
}

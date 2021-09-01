import React from "react";
import { renderRoutes } from "react-router-config";
import { Layout } from "antd";

import "./style.scss";

const { Content } = Layout;

export default function AuthLayout(props) {
  const { route } = props;

  return (
    <>
      <Content className="site-layout">
        <div className="site-layout-background">
          {renderRoutes(route.routes)}
        </div>
      </Content>
    </>
  );
}

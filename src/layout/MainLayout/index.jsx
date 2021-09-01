import React from "react";
import { renderRoutes } from "react-router-config";
import { Layout } from "antd";

import "./style.scss";
import CommonFooter from "../../components/CommonFooter";
import Navigation from "../../components/Navigation";

const { Content, Footer } = Layout;

export default function MainLayout(props) {
  const { route } = props;
  return (
    <>
      <div className="main-layout">
        <Layout>
          <Navigation />
          <Content className="site-layout">
            <div className="site-layout-background">
              {renderRoutes(route.routes)}
            </div>
          </Content>
          <Footer className="custom-footer">
            <CommonFooter />
          </Footer>
        </Layout>
      </div>
    </>
  );
}

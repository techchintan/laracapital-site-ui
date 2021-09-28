import React from "react";
import { renderRoutes } from "react-router-config";
import { CContainer, CFade } from "@coreui/react";

import Header from "../../components/Header";
import SideBarMenu from "../../components/Header/SideBarMenu";
import Footer from "../../components/Footer";

export default function AdminLayout(props) {
  const { route } = props;

  return (
    <div className="c-app c-default-layout">
      {/* Side Menu bar for Mobile screen */}
      <SideBarMenu />
      <div className="c-wrapper">
        {/* Header for Desktop screen */}
        <Header />
        <div className="c-body">
          <main className="c-main">
            {/* Rendered All Authenticated Routes from here */}
            <CContainer fluid>
              <CFade>{renderRoutes(route?.routes)}</CFade>
            </CContainer>
          </main>
        </div>
        {/* Footer component for Authenticated user */}
        <Footer />
      </div>
    </div>
  );
}

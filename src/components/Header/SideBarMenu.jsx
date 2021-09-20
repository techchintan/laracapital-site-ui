import React from "react";
import { useRecoilState } from "recoil";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";
import BrandLogo from "../../assets/images/company-logo.svg";

import { sideMenuBarAtom } from "../../recoils/header";
import { normalUserNavigation } from "../../utils";

export default function SideBarMenu() {
  const [sideMenuBar, setSideMenuBar] = useRecoilState(sideMenuBarAtom);
  return (
    <CSidebar show={sideMenuBar} onShowChange={(val) => setSideMenuBar(val)}>
      <CSidebarBrand className="d-md-down-none" to="/dashboard">
        <img src={BrandLogo} alt="BrandLogo" height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={normalUserNavigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
}

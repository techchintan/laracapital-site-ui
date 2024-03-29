import React from "react";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router";
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
import { adminUserNavigation, normalUserNavigation } from "../../utils";

// Side menu bar for Mobile screen
export default function SideBarMenu() {
  const history = useHistory();
  const [sideMenuBar, setSideMenuBar] = useRecoilState(sideMenuBarAtom);

  return (
    <CSidebar show={sideMenuBar} onShowChange={(val) => setSideMenuBar(val)}>
      <CSidebarBrand className="d-md-down-none" to="/admin/employees">
        <img src={BrandLogo} alt="BrandLogo" height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={
            history.location.pathname === "/employee/equipment"
              ? normalUserNavigation
              : adminUserNavigation
          }
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

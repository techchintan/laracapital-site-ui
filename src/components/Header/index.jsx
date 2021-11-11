import React from "react";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router";
import {
  CHeader,
  CToggler,
  CHeaderNav,
  CSubheader,
  CBreadcrumbRouter,
} from "@coreui/react";

import { sideMenuBarAtom } from "../../recoils/header";
import HeaderDropdown from "./HeaderDropdown";

// Dashboard Header component
export default function Header() {
  const history = useHistory();
  const [sideMenuBar, setSideMenuBar] = useRecoilState(sideMenuBarAtom);

  const adminBreadCrumbRoutes = [
    { path: "/admin", exact: true, name: "Home" },
    { path: "/admin/employees", exact: true, name: "Employees" },
    { path: "/admin/equipments", exact: true, name: "Equipments" },
    { path: "/admin/equipment/:id", exact: true, name: "Equipment Details" },
    { path: "/admin/addequipment", exact: true, name: "Add Equipment" },
    { path: "/admin/location", exact: true, name: "Location" },
  ];

  const employeeBreadCrumbRoutes = [
    { path: "/employee", exact: true, name: "Home" },
    { path: "/employee/equipments", exact: true, name: "Equipments" },
  ];

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={() => setSideMenuBar(!sideMenuBar)}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={() => setSideMenuBar(!sideMenuBar)}
      />
      <CHeaderNav className="d-md-down-none mr-auto" />
      <CHeaderNav className="px-3">
        <HeaderDropdown />
      </CHeaderNav>
      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={
            history.location.pathname === "/employee/equipment"
              ? employeeBreadCrumbRoutes
              : adminBreadCrumbRoutes
          }
        />
      </CSubheader>
    </CHeader>
  );
}

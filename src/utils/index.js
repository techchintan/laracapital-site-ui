import React from "react";
import CIcon from "@coreui/icons-react";

/* Initial Parameter of Axios Request */
export const axiosInitialParams = {
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  mode: "cors",
  redirect: "follow",
  referrer: "no-referrer",
  withCredentials: true,
};

/* Topbar: Normal user Inner Navigation */
export const normalUserNavigation = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/admin/dashboard",
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Employees",
    to: "/admin/employees",
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Equipments",
    to: "/admin/equipments",
    icon: <CIcon name="cil-puzzle" customClasses="c-sidebar-nav-icon" />,
  },
];

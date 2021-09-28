import React from "react";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

/* Initial Parameter of Axios API Request */
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

/* Topbar: Dashboard Inner Navigation */
export const normalUserNavigation = [
  {
    _tag: "CSidebarNavItem",
    name: "Employees",
    to: "/admin/employees",
    icon: <UserOutlined style={{ marginRight: 12 }} />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Equipments",
    to: "/admin/equipments",
    icon: <ShoppingCartOutlined style={{ marginRight: 12 }} />,
  },
];

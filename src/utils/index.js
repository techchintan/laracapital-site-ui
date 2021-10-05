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
  {
    _tag: "CSidebarNavItem",
    name: "Location",
    to: "/admin/location",
    icon: <ShoppingCartOutlined style={{ marginRight: 12 }} />,
  },
];

/* Global Errors state utils */
export const getErrorMessage = (errors, fieldName, fieldLabel) => {
  if (errors[fieldName]) {
    const { type } = errors[fieldName];
    switch (type) {
      case "required":
        return `${fieldLabel} is required`;
      case "sameAs":
        return "Passwords do not match. Please try again.";
      case "pattern":
        return `Invalid ${fieldLabel}`;
      default:
        // eslint-disable-next-line no-console
        console.error(`Unknow error type: ${type}`);
        return type;
    }
  } else {
    return false;
  }
};

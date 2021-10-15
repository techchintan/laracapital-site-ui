import MainLayout from "./layout/MainLayout"; //Guest components render from AuthLayout, i,e Home
import AuthLayout from "./layout/AuthLayout"; //auth components render from AuthLayout, i,e Login
import AdminLayout from "./layout/AdminLayout"; //Authenticated components render from AuthLayout, i,e Dashboard

import { withAuth, withRole } from "./hoc";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Employees from "./pages/Admin/Employees";
import Equipments from "./pages/Admin/Equipments";
import NotFoundPage from "./pages/NotFoundPage";
import Location from "./pages/Admin/Location";
import AddEquipments from "./pages/Admin/Equipments/AddEquipments";

/**
 * @routes {array} of routes
 * @returns two type routes:
 * 1. Auth: All routes use for authentication
 * 2. Main: All routes use for guest routing
 * 3. Admin: All routes use for Authenticated user (Private routes)
 */

const routes = [
  {
    path: "/auth",
    component: AuthLayout,
    routes: [
      {
        path: "/auth",
        exact: true,
        component: Login,
        key: "login-page",
      },
      {
        path: "/auth/login",
        exact: true,
        component: Login,
        key: "login-page",
      },
      {
        path: "/auth/register",
        exact: true,
        component: Register,
        key: "register-page",
      },
      {
        path: "*",
        component: NotFoundPage,
        key: "not-found",
      },
    ],
  },
  {
    path: "/admin",
    component: withAuth(AdminLayout),
    routes: [
      {
        path: "/admin",
        exact: true,
        component: Employees,
        key: "default-employees",
      },
      {
        path: "/admin/employees",
        exact: true,
        component: Employees,
        key: "employees",
      },
      {
        path: "/admin/equipments",
        exact: true,
        component: Equipments,
        key: "equipments",
      },
      {
        path: "/admin/addEquipment",
        exact: true,
        component: AddEquipments,
        key: "add-equipments",
      },
      {
        path: "/admin/location",
        exact: true,
        component: Location,
        key: "location",
      },
      {
        path: "*",
        component: NotFoundPage,
        key: "admin-not-found",
      },
    ],
  },
  {
    path: "/admin",
    component: withRole(AdminLayout, "admin"),
    routes: [
      {
        path: "/admin",
        exact: true,
        component: Employees,
        key: "admin-home",
      },
      {
        path: "/admin/employees",
        exact: true,
        component: Employees,
        key: "employees",
      },
      {
        path: "*",
        component: NotFoundPage,
        key: "not-found",
      },
    ],
  },
  {
    path: "/",
    component: MainLayout,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
        key: "homepage-default",
      },
      {
        path: "/home",
        exact: true,
        component: Home,
        key: "homepage",
      },
      {
        path: "/contact-us",
        exact: true,
        component: ContactUs,
        key: "contact-us",
      },
      {
        path: "/about-us",
        exact: true,
        component: AboutUs,
        key: "about-us",
      },
      {
        path: "*",
        component: NotFoundPage,
        key: "not-found",
      },
    ],
  },
];

/**
 * Generate Route
 * @param {string} key route key
 * @param {array} routes routes array
 * @returns {string} url
 */

const generateRoute = (key, mainRoutes = routes) => {
  let url = false;
  mainRoutes.some((i) => {
    if (i.key === key && !url) {
      url = i.path;
    } else if (i.routes) {
      url = generateRoute(key, i.routes);
    }
    return url;
  });
  return url;
};

export { routes, generateRoute };

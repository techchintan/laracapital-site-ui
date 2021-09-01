import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";

import { withAuth } from "./hoc";
import LaraCapitalLanding from "./pages/Landing";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Register from "./pages/Register";
import NotFoundPage from "./pages/NotFoundPage";

/**
 * @routes {array} of routes
 * @returns two type routes:
 * 1. Account: All routes use for auth
 * 2. Main: All routes use for internal routing (Private routes)
 */

const routes = [
  {
    path: "/admin",
    component: withAuth(AdminLayout),
    routes: [
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
        component: LaraCapitalLanding,
        key: "homepage",
      },
      {
        path: "/register",
        exact: true,
        component: Register,
        key: "register",
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
        path: "/blog",
        exact: true,
        component: Blog,
        key: "blog",
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

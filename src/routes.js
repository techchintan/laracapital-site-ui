import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

// import { withAuth } from "./hoc";
import HomePage from "./pages/Landing";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";

/**
 * @routes {array} of routes
 * @returns two type routes:
 * 1. Auth: All routes use for auth
 * 2. Main: All routes use for internal routing (Private routes)
 */

const routes = [
  {
    /* Enable withAuth once done with auth api */
    path: "/auth",
    component: AuthLayout,
    routes: [
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
    path: "/",
    component: MainLayout,
    routes: [
      {
        path: "/",
        exact: true,
        component: HomePage,
        key: "homepage-default",
      },
      {
        path: "/home",
        exact: true,
        component: HomePage,
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

import CoreLayout from "../layouts/CoreLayout";
import WebLayout from "../layouts/WebLayout";
import AppLayout from "../layouts/AppLaoyut";
import Home from "./Home";
import Dashboard from "./Dashboard";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";

export const createRoutes = store => ({
  component: CoreLayout,
  childRoutes: [
    {
      path: "/",
      component: WebLayout,
      indexRoute: Home,
      childRoutes: [
        {
          path: "/hakkimizda",
          component: AboutUs
        },
        {
          path: "/iletisim",
          component: Contact
        }
      ]
    },
    {
      path: "/app",
      component: AppLayout,
      indexRoute: Dashboard
    }
  ]
});

export default createRoutes;

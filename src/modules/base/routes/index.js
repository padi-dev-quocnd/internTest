import { lazy } from "react";

const BasePage = lazy(() => import("../pages/BasePage"));

export const baseRoutes = [
  {
    path: "/base",
    component: BasePage,
    authenticated: false,
  },
];

import { lazy } from "react";

const LocationInformationPage = lazy(() => import("../pages/LocationInformationPage"));

export const locationInformationRoutes = [
  {
    path: "/location-information",
    component: LocationInformationPage,
    authenticated: false,
  },
];

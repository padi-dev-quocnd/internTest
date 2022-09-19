import { lazy } from "react";

const HowToUsePage = lazy(() => import("../page/HowToUsePage"));

export const howToUseRotes = [
  {
    path: "/how-to-use",
    component: HowToUsePage,
    authenticated: false,
  },
];

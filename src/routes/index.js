import { baseRoutes } from "modules/base/routes";
import { homeRoutes } from "modules/home/routes";
import { locationInformationRoutes } from "modules/location-information/routes";
import {howToUseRotes} from "modules/HowToUse/route"

export const appRoutes = [...baseRoutes, ...homeRoutes, ...locationInformationRoutes,...howToUseRotes];

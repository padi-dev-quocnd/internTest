import commonEn from "./en.json";
import commonJa from "./ja.json";

import baseEn from "../modules/base/language/en.json";
import baseJa from "../modules/base/language/ja.json";
export const en = {
  ...baseEn,
  ...commonEn,
};
export const ja = {
  ...baseJa,
  ...commonJa,
};

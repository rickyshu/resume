import { atom } from "recoil";

import { THEME } from "../constants/index";

const { DARK_THEME, LIGHT_THEME } = THEME;

export const getTheme = (): string => {
  const theme = String(localStorage.getItem("theme"));
  if (theme === DARK_THEME) {
    return DARK_THEME;
  }
  return LIGHT_THEME;
};

export const themeMode = atom({
  key: "themeMode",
  default: getTheme(),
});

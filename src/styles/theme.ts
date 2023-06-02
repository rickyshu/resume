import { DefaultTheme } from "styled-components";

import { SIZE } from "../constants/index";

const { TABLET, DESKTOP } = SIZE;

declare module "styled-components" {
  export interface DefaultTheme {
    value: string;
    themeStyle: {
      backgroundColor: string;
      fontColor: string;
    };
    breakpoints: {
      TABLETMIN: string;
      DESKTOPMIN: string;
    };
  }
}

export const lightTheme: DefaultTheme = {
  value: "light",
  themeStyle: {
    backgroundColor: "#ffffff",
    fontColor: "#000000",
  },
  breakpoints: {
    TABLETMIN: `screen and (min-width: ${TABLET})`,
    DESKTOPMIN: `screen and (min-width: ${DESKTOP})`,
  },
} as const;

export const darkTheme: DefaultTheme = {
  value: "dark",
  themeStyle: {
    backgroundColor: "#000000",
    fontColor: "#ffffff",
  },
  breakpoints: {
    TABLETMIN: `screen and (min-width: ${TABLET})`,
    DESKTOPMIN: `screen and (min-width: ${DESKTOP})`,
  },
} as const;

import { DefaultTheme } from "styled-components";

import { SIZE, COLOR } from "../constants/index";

const { TABLET, DESKTOP } = SIZE;
const { TITLE_COLOR } = COLOR;

declare module "styled-components" {
  export interface DefaultTheme {
    value: string;
    themeStyle: {
      backgroundColor: string;
      fontColor: string;
      titleColor: string;
      ArrowBackGroundColor: string;
      ArrowHoverColor: string;
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
    titleColor: "#000000",
    ArrowBackGroundColor: "#808080",
    ArrowHoverColor: "#585858",
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
    titleColor: `${TITLE_COLOR}`,
    ArrowBackGroundColor: "#f3f3f3",
    ArrowHoverColor: "#C0C0C0",
  },
  breakpoints: {
    TABLETMIN: `screen and (min-width: ${TABLET})`,
    DESKTOPMIN: `screen and (min-width: ${DESKTOP})`,
  },
} as const;

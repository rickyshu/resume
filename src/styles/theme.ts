import { DefaultTheme } from "styled-components";

import { SIZE, COLOR } from "../constants/index";

const { TABLET, DESKTOP, TABLET_BIG } = SIZE;
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
      cardColor: string;
      AboutBGColor: string;
    };
    breakpoints: {
      TABLETMIN: string;
      TABLETBIG: string;
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
    cardColor: "#F5F5F5",
    AboutBGColor: "#CAC4A4",
  },
  breakpoints: {
    TABLETMIN: `screen and (min-width: ${TABLET})`,
    TABLETBIG: `screen and (min-width: ${TABLET_BIG})`,
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
    cardColor: "#303030",
    AboutBGColor: "#606470",
  },
  breakpoints: {
    TABLETMIN: `screen and (min-width: ${TABLET})`,
    TABLETBIG: `screen and (min-width: ${TABLET_BIG})`,
    DESKTOPMIN: `screen and (min-width: ${DESKTOP})`,
  },
} as const;

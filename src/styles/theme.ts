import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    value: string;
    themeStyle: {
      backgroundColor: string;
      fontColor: string;
    };
  }
}

export const lightTheme: DefaultTheme = {
  value: "light",
  themeStyle: {
    backgroundColor: "#ffffff",
    fontColor: "#000000",
  },
} as const;

export const darkTheme: DefaultTheme = {
  value: "dark",
  themeStyle: {
    backgroundColor: "#000000",
    fontColor: "#ffffff",
  },
} as const;

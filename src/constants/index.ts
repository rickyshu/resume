import { Theme, ContactInfoArray } from "../types";
import { RiUserFill, RiShoppingBagFill, RiPhoneFill, RiMailFill, RiPencilFill } from "react-icons/ri";

export const THEME: Theme = {
  DARK_THEME: "dark",
  LIGHT_THEME: "light",
} as const;

export const SIZE = {
  TABLET: "670px", // 670이상부터 적용
  TABLET_BIG: "850px", // 850이상부터 적용
  DESKTOP: "1110px", // 1110이상부터 적용
  MAX_WIDTH: "1140px",
} as const;

export const COLOR = {
  TITLE_COLOR: "hsla(0, 0%, 100%, 0.7)",
  SAHDOW_COLOR: "#C4C4C4",
} as const;

// header
export const HEADER = {
  NAV_LISTS: [
    {
      id: 1,
      navName: "About Me",
      location: 0,
    },
    {
      id: 2,
      navName: "Introduction",
      location: 910,
    },
    {
      id: 3,
      navName: "Skills",
      location: 1340,
    },
    {
      id: 4,
      navName: "Archiving",
      location: 2668,
    },
    {
      id: 5,
      navName: "Projects",
      location: 3436,
    },
    {
      id: 6,
      navName: "Studies",
      location: 5576,
    },
    {
      id: 7,
      navName: "Languages",
      location: 5684,
    },
  ],
};

export const CONTACTINFO: ContactInfoArray = {
  PERSONAL_INFO: [
    {
      id: 1,
      Icon: RiUserFill,
      AboutMeTitle: "이름",
      AboutMeInfo: "이호인",
    },
    {
      id: 2,
      Icon: RiShoppingBagFill,
      AboutMeTitle: "생년월일",
      AboutMeInfo: "1996.12.05",
    },
    {
      id: 3,
      Icon: RiPhoneFill,
      AboutMeTitle: "전화번호",
      AboutMeInfo: "010-8808-4551",
    },
    {
      id: 4,
      Icon: RiMailFill,
      AboutMeTitle: "이메일",
      AboutMeInfo: "hoinleekk@gmail.com",
    },
    {
      id: 5,
      Icon: RiPencilFill,
      AboutMeTitle: "학력",
      AboutMeInfo: "연세대학교(신촌) 사회학과",
    },
  ],
};

import { Theme, ContactInfoArray } from "../types";
import { RiUserFill, RiShoppingBagFill, RiPhoneFill, RiMailFill, RiPencilFill } from "react-icons/ri";

export const THEME: Theme = {
  DARK_THEME: "dark",
  LIGHT_THEME: "light",
} as const;

export const SIZE = {
  TABLET: "670px", // 670이상부터 적용
  DESKTOP: "1110px", // 1110이상부터 적용
  MAX_WIDTH: "1140px",
} as const;

export const COLOR = {
  TITLE_COLOR: "hsla(0, 0%, 100%, 0.7)",
} as const;

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
      AboutMeInfo: "96.12.05",
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
      AboutMeInfo: "연세대학교(신촌)-사회학과",
    },
  ],
};

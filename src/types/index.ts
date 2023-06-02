import { IconType } from "react-icons/lib";

export interface Theme {
  DARK_THEME: string;
  LIGHT_THEME: string;
}

export interface UserContactInfo {
  id: number;
  Icon: IconType;
  AboutMeTitle: string;
  AboutMeInfo: string;
}

export interface ContactInfoArray {
  PERSONAL_INFO: Array<UserContactInfo>;
}

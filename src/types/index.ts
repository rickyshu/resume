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

export interface SkillsInfo {
  id: number;
  skillImg: string;
  skillName: string;
  description: string;
}

export type ArchivingDescriptionLists = {
  id: number;
  content: string;
};

export interface ArchivingInfo {
  id?: number;
  archLink: string;
  logoImg: string;
  logoName: string;
  description: string;
  description_lists: Array<ArchivingDescriptionLists>;
}

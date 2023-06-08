import styled, { css } from "styled-components";
import { RiGithubFill, RiYoutubeFill, RiFile3Fill } from "react-icons/ri";

import { COLOR } from "../../constants";

const { SAHDOW_COLOR } = COLOR;

export const Container = styled.section`
  padding: 1.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.themeStyle.cardColor};
  box-shadow: 0 0.3rem 0.3rem 0 ${(props) => (props.theme.value === "light" ? SAHDOW_COLOR : "white")};
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ProjectName = styled.h1`
  font-size: 1.7rem;
  font-weight: 900;
  text-align: center;
`;

export const ProjectPeriod = styled.p`
  color: #6c757d;
  font-size: 0.8rem;
  text-align: center;
`;

export const LinkSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.3rem;
  border-bottom: 1px solid ${SAHDOW_COLOR};
`;

export const LinksFirst = styled.div`
  display: flex;
  gap: 10px;
`;

export const Links = styled.a`
  border: 1px solid #c0c0c0;
  padding: 0.2rem;
  border-radius: 5px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

export const LinkTitle = styled.p`
  color: ${(props) => props.theme.themeStyle.fontColor};
  font-size: 4px;
`;

export const ProejctInfoWrapper = styled.div`
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media ${(props) => props.theme.breakpoints.TABLETMIN} {
    flex-direction: row;
  }
  & > p {
    border: 1px solid red;
    flex: 1;
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const CommonStyleIcon = css`
  font-size: 1.1rem;
  color: #b0b0b0;
`;

export const GithubIcon = styled(RiGithubFill)`
  ${CommonStyleIcon}
`;

export const YoutubeIcon = styled(RiYoutubeFill)`
  ${CommonStyleIcon}
`;

export const FileIcon = styled(RiFile3Fill)`
  ${CommonStyleIcon}
`;

export const TechLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const TechStack = styled.li`
  font-size: 10px;
  padding: 0.3rem;
  text-align: center;
  color: #b0b0b0;
  border: 1px solid #c0c0c0;
  background-color: transparent;
  border-radius: 5px;
`;

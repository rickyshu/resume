import styled from "styled-components";

import { COLOR } from "../../constants";

const { SAHDOW_COLOR } = COLOR;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.themeStyle.cardColor};
  box-shadow: 0 0.3rem 0.3rem 0 ${(props) => (props.theme.value === "light" ? SAHDOW_COLOR : "white")};
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
  @media ${(props) => props.theme.breakpoints.TABLETMIN} {
    width: calc(100% / 3);
    height: inherit;
  }
`;

export const LogoSection = styled.section`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const LogoImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export const LogoName = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: capitalize;
`;

export const ArchiveDes = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const ArchiveListContent = styled.li`
  padding: 0.3rem;
  display: list-item;
  list-style: disc inside;
`;

export const StyledLink = styled.a`
  color: blue;
  text-decoration: none;
  padding: 0 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

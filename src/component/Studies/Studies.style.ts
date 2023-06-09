import styled from "styled-components";

import { SIZE, COLOR } from "../../constants";

const { MAX_WIDTH } = SIZE;

const { SAHDOW_COLOR } = COLOR;

export const Container = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const Wrapper = styled.div`
  max-width: ${MAX_WIDTH};
`;

export const HeadingTitle = styled.h1`
  color: ${(props) => props.theme.themeStyle.titleColor};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid gray;
  padding: 1rem 0;
`;

export const ContentSection = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 80px;
  gap: 15px 20px;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.themeStyle.cardColor};
  box-shadow: 0 0.3rem 0.3rem 0 ${(props) => (props.theme.value === "light" ? SAHDOW_COLOR : "white")};
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }

  li:first-of-type,
  li:nth-of-type(2),
  li:nth-of-type(3) {
    background-color: gray;
    font-weight: bold;
  }
`;

export const List = styled.li`
  padding: 8px;
  display: flex;
  align-items: center;
  word-break: keep-all;
  border-radius: 5px;
  border-bottom: 1px solid;
`;

export const Link = styled.a`
  padding: 8px;
  &:hover {
    color: gray;
  }
`;

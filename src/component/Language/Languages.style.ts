import styled from "styled-components";

import { SIZE } from "../../constants";

const { MAX_WIDTH } = SIZE;

export const Container = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const LanguagesInfo = styled.div`
  padding: 1rem;
`;

export const Language = styled.p`
  padding: 0.8rem;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 4rem;
`;

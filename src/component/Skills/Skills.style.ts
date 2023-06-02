import styled from "styled-components";

import { SIZE } from "../../constants";

const { MAX_WIDTH } = SIZE;

export const Container = styled.article`
  height: 500px;
  border: 1px solid blue;
  padding: 1rem 1rem;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: ${MAX_WIDTH};
`;

export const HeadingTitle = styled.h1`
  color: ${(props) => props.theme.themeStyle.titleColor};
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
`;
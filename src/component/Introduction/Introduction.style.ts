import styled from "styled-components";

import { SIZE } from "../../constants";

const { MAX_WIDTH } = SIZE;

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
  .introduction {
    text-indent: 2rem;
    margin: 1.5rem 0;
  }
`;

export const HeadingTitle = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.themeStyle.titleColor};
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 1px solid grey;
  padding: 1rem 0;
`;

export const Content = styled.section``;

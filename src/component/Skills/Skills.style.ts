import styled from "styled-components";

import { SIZE } from "../../constants";

const { MAX_WIDTH } = SIZE;

export const Container = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Wrapper = styled.div`
  max-width: ${MAX_WIDTH};

  section:first-child {
    border-top: 1px solid rgba(128, 128, 128, 0.5);
  }
`;

export const HeadingTitle = styled.h1`
  color: ${(props) => props.theme.themeStyle.titleColor};
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 1px solid grey;
  padding: 1rem 0;
`;

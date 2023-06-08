import styled, { css } from "styled-components";

// constant
import { COLOR } from "../../constants";

const { SAHDOW_COLOR } = COLOR;

export const Container = styled.section`
  padding: 0.5rem 2rem;
  display: flex;
  gap: 15px;
`;

const CommonStyle = css`
  flex: 1;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border: 1px solid black;
  border-radius: 8px;
  padding: 0.2rem;
  text-align: center;
`;

export const StudyName = styled.div`
  ${CommonStyle};
`;

export const Period = styled.div`
  ${CommonStyle};
  background-color: ${SAHDOW_COLOR};
`;

export const StudyLink = styled.a`
  color: ${(props) => props.theme.themeStyle.fontColor};
  ${CommonStyle};
  &:hover {
    color: ${SAHDOW_COLOR};
  }
`;

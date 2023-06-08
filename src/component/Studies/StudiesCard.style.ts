import styled, { css } from "styled-components";

// constant
import { COLOR } from "../../constants";

const { SAHDOW_COLOR } = COLOR;

export const Container = styled.section`
  padding: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
`;

const CommonStyle = css`
  /* flex: 1; */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  flex: 0 1 300px;
`;

export const StudyName = styled.div`
  ${CommonStyle};
`;

export const Period = styled.div`
  ${CommonStyle};
`;

export const StudyLink = styled.a`
  color: ${(props) => props.theme.themeStyle.fontColor};
  ${CommonStyle};
  &:hover {
    color: ${SAHDOW_COLOR};
  }
`;

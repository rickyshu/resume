import styled, { css } from "styled-components";

import { COLOR } from "../../constants";

const { SAHDOW_COLOR } = COLOR;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1.2;
`;

export const Heading = styled.h1`
  font-size: 1.1rem;
  color: ${SAHDOW_COLOR};
  font-weight: bold;
`;

const ContentCommonStyle = css`
  padding: 0.7rem;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Summary = styled.div`
  ${ContentCommonStyle};
  border-bottom: 1px solid ${SAHDOW_COLOR};
`;

export const Description = styled.div`
  ${ContentCommonStyle};
`;

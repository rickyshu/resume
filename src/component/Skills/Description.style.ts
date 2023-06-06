import styled, { css } from "styled-components";

const FlexCenter = css`
  display: flex;
  justify-content: start;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.TABLETMIN} {
    justify-content: center;
  }
`;

export const Container = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);

  @media ${(props) => props.theme.breakpoints.TABLETMIN} {
    flex-direction: row;
  }

  & p {
    ${FlexCenter}
    padding: 0.5rem;
    width: 70%;
  }
`;

export const SkillImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  padding: 0.5rem;
`;

export const SkillName = styled.div`
  ${FlexCenter}
  text-transform:uppercase;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.5rem;
`;

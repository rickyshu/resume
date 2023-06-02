import styled from "styled-components";

export const Container = styled.div`
  padding: 0.2rem;
  /* margin: 0 1rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.p`
  /* text-align: center; */
  width: 10rem;
  font-size: 0.8rem;
`;

export const IconSection = styled.div`
  padding: 0.5rem;
  margin-right: 0.5rem;
  & svg {
    font-size: 2rem;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & .title {
    font-weight: 900;
    font-size: 1.1rem;
  }
`;

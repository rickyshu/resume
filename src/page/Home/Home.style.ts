import styled from "styled-components";

import { RiArrowUpLine } from "react-icons/ri";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const ArrowUpIcon = styled(RiArrowUpLine)`
  font-size: 1.5rem;
`;

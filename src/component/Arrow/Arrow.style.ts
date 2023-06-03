import styled, { keyframes, css } from "styled-components";

import { RiArrowUpLine, RiArrowDownLine } from "react-icons/ri";

interface showArrowProps {
  showArrow: boolean;
}

const bottomToTop = keyframes`
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
`;

export const Container = styled.section<showArrowProps>`
  display: ${(props) => (props.showArrow ? "block" : "none")};
  position: fixed;
  right: 25px;
  bottom: 10px;
  animation: ${bottomToTop} 0.5s ease-in-out forwards;
`;

const ArrowWrapperCommon = css`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  background-color: ${(props) => props.theme.themeStyle.ArrowBackGroundColor};
  border: 2px solid ${(props) => props.theme.themeStyle.ArrowHoverColor};
  &:hover {
    background-color: ${(props) => props.theme.themeStyle.ArrowHoverColor};
  }
`;

export const ArrowUpWrapper = styled.div`
  ${ArrowWrapperCommon}
`;

export const ArrowUpIcon = styled(RiArrowUpLine)`
  font-size: 1.5rem;
  color: black;
`;

export const ArrowDownWrapper = styled.div`
  ${ArrowWrapperCommon}
`;

export const ArrowDownIcon = styled(RiArrowDownLine)`
  font-size: 1.5rem;
  color: black;
`;

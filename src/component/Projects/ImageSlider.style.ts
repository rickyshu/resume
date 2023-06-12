import styled, { css } from "styled-components";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

export const Container = styled.section`
  padding: 0.5rem 0;
  flex: 1.5;
  @media ${(props) => props.theme.breakpoints.TABLETMIN} {
    width: 100%;
  }
`;

export const Slider = styled.div`
  position: relative;
`;

export const SlideImg = styled.img`
  width: 100%;
  /* height: 300px; */
  object-fit: contain;
  border-radius: 8px;
  filter: ${(props) => (props.theme.value === "light" ? "brightness(100%)" : "brightness(60%) contrast(120%)")};
`;

export const Index = styled.p`
  text-align: center;
`;

const CommonIconStyle = css`
  font-size: 3rem;
  color: gray;
  position: absolute;
  top: 40%;
`;

export const ArrowRight = styled(RiArrowDropRightLine)`
  ${CommonIconStyle};
  right: -10px;
`;

export const ArrowLeft = styled(RiArrowDropLeftLine)`
  ${CommonIconStyle};
  left: -10px;
`;

import styled, { css } from "styled-components";

// react-icon
import { RiSunFill, RiMoonClearFill } from "react-icons/ri";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

interface HedearProps {
  headerColor: boolean;
}
interface NavProps {
  clickHamburger: boolean;
}

export const Header = styled.header<HedearProps>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 80px;
  z-index: 1;
  background-color: ${(props) => (props.headerColor ? "#e41c6f" : "transparent")};
  color: hsla(0, 0%, 100%, 0.7);
  @media (max-width: 1200px) {
    transition: 0.5s;
    background-color: #e41c6f;
  }
  & .active {
    background-color: #e41c6f;
  }
`;

export const Wrapper = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommonIconStyle = css`
  font-size: 1.6rem;
`;

export const IconWrapper = styled.div`
  padding: 0.3rem;
  display: none;
  cursor: pointer;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HamburgerIcon = styled(RxHamburgerMenu)`
  ${CommonIconStyle}
`;

export const CrossIcon = styled(RxCross2)`
  ${CommonIconStyle}
`;

export const Nav = styled.ul<NavProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 1200px) {
    padding: 0.6rem;
    display: ${(props) => (props.clickHamburger ? "flex" : "none")};
    position: fixed;
    left: 0;
    top: 80px;
    flex-direction: column;
    background-color: #e41c6f;
    width: 100%;
    z-index: 1;
    text-align: center;
  }
`;

export const Link = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid black;
  }
`;

export const ThemeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.8rem;
`;

const CommonStyle = css`
  font-size: 1.6rem;
  cursor: pointer;
`;

export const SunIcon = styled(RiSunFill)`
  ${CommonStyle};
`;

export const MoonIcon = styled(RiMoonClearFill)`
  ${CommonStyle};
`;

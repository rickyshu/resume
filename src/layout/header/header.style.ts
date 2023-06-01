import styled, { css } from "styled-components";
import { RiSunFill } from "react-icons/ri";
import { RiMoonClearFill } from "react-icons/ri";

interface HedearProps {
  headerColor: boolean;
}
export const Header = styled.header<HedearProps>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 80px;
  z-index: 1;
  background-color: ${(props) => (props.headerColor ? "#e41c6f" : "transparent")};
  color: hsla(0, 0%, 100%, 0.7);
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
  border: 1px solid red;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Link = styled.a`
  padding: 0.5rem 0.5rem;
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
  font-size: 1.5rem;
  cursor: pointer;
`;

export const SunIcon = styled(RiSunFill)`
  ${CommonStyle};
`;

export const MoonIcon = styled(RiMoonClearFill)`
  ${CommonStyle};
`;

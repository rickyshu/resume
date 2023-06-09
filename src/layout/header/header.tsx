import * as S from "./header.style";

// react hooks
import { useState } from "react";

// recoil
import { themeMode } from "../../recoil/Theme";
import { useRecoilState } from "recoil";

// constants
import { HEADER } from "../../constants/index";

// types
import { HeaderNav } from "../../types/index";

const Header = () => {
  const { NAV_LISTS } = HEADER;

  const [headerColor, setHeaderColor] = useState<boolean>(false);
  const [handleThemeMode, setHandleThemeMode] = useRecoilState<string>(themeMode);
  const [clickHamburger, setclickHamburger] = useState<boolean>(false);

  const handleTheme = () => {
    if (handleThemeMode === "dark") {
      localStorage.setItem("theme", "light");
      setHandleThemeMode("light");
    } else if (handleThemeMode === "light") {
      localStorage.setItem("theme", "dark");
      setHandleThemeMode("dark");
    }
  };

  const HandleHamburger = () => {
    setclickHamburger((pre) => !pre);
  };

  const changeHeaderColor = () => {
    if (window.scrollY >= 30) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };

  window.addEventListener("scroll", changeHeaderColor);

  const scrollTo = (location: number) => {
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  return (
    <S.Header headerColor={headerColor}>
      <S.Wrapper>
        <S.Logo>Rickyshu's Portfolio</S.Logo>
        <S.LeftWrapper>
          <S.IconWrapper onClick={HandleHamburger}>{clickHamburger ? <S.CrossIcon /> : <S.HamburgerIcon />}</S.IconWrapper>
          <S.Nav clickHamburger={clickHamburger}>
            {NAV_LISTS.map(({ id, navName, location }: HeaderNav) => {
              return (
                <S.Link key={id} onClick={() => scrollTo(location)}>
                  {navName}
                </S.Link>
              );
            })}
          </S.Nav>
          <S.ThemeWrapper onClick={handleTheme}>{handleThemeMode === "light" ? <S.SunIcon /> : <S.MoonIcon />}</S.ThemeWrapper>
        </S.LeftWrapper>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;

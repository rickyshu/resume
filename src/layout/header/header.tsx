import * as S from "./header.style";

import { useState } from "react";

import { themeMode } from "../../recoil/Theme";
import { useRecoilState } from "recoil";

type LinkName = readonly ["About Me", "Introduction", "Skills", "Blogs", "Projects", "Studies"];

const Header = () => {
  const navList: LinkName = ["About Me", "Introduction", "Skills", "Blogs", "Projects", "Studies"];

  const [headerColor, setHeaderColor] = useState<boolean>(false);

  const [handleThemeMode, setHandleThemeMode] = useRecoilState<string>(themeMode);

  const handleTheme = () => {
    if (handleThemeMode === "dark") {
      localStorage.setItem("theme", "light");
      setHandleThemeMode("light");
    } else if (handleThemeMode === "light") {
      localStorage.setItem("theme", "dark");
      setHandleThemeMode("dark");
    }
  };

  const changeHeaderColor = () => {
    if (window.scrollY >= 30) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };

  window.addEventListener("scroll", changeHeaderColor);

  return (
    <S.Header headerColor={headerColor}>
      <S.Wrapper>
        <S.Logo>Rickyshu's Portfolio</S.Logo>
        <S.LeftWrapper>
          <S.Nav>
            {navList.map((element, index) => {
              return <S.Link key={index}>{element}</S.Link>;
            })}
          </S.Nav>
          <S.ThemeWrapper onClick={handleTheme}>{handleThemeMode === "light" ? <S.SunIcon /> : <S.MoonIcon />}</S.ThemeWrapper>
        </S.LeftWrapper>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;

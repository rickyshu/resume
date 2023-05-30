// style
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { themeMode } from "./recoil/Theme";

// theme
import { darkTheme, lightTheme } from "./styles/theme";

// constant
import { THEME } from "./constants/index";

// router
import { routers } from "./router";
import { RouterProvider, Routes } from "react-router-dom";

export default function App() {
  const themeType = useRecoilValue<string>(themeMode);
  const theme = themeType === THEME.LIGHT_THEME ? lightTheme : darkTheme;

  // 헤더로 이동하면 될 듯하다!
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
}

// style
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

// recoil
import { useRecoilValue } from "recoil";
import { themeMode } from "./recoil/Theme";

// theme
import { darkTheme, lightTheme } from "./styles/theme";

// constant
import { THEME } from "./constants/index";

// router
import { routers } from "./router";
import { RouterProvider } from "react-router-dom";

export default function App() {
  const themeType = useRecoilValue<string>(themeMode);
  const theme = themeType === THEME.LIGHT_THEME ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
}

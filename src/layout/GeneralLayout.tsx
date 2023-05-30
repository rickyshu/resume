import { Outlet } from "react-router-dom";

// react-component
import Header from "./header/header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

export default function GeneralLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

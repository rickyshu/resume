import { Outlet } from "react-router-dom";

// react-component
import Header from "./header/header";
import Main from "./main/Main";

export default function GeneralLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

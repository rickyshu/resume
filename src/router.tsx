import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";

// react component
import GeneralLayout from "./layout/GeneralLayout";
import Home from "./component/Home/Home";

export const routers: RemixRouter = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

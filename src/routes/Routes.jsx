import { useRoutes } from "react-router-dom";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import { Homepage } from "../views/homepage";
import { NotFound } from "../views/NotFound";
import { Layout } from "../layout/Layout";
import { MyList } from "../views/MyList";

const router = () => [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/my-list",
        element: <MyList />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const Routes = (props) => {
  const routers = router(props);
  let routes = useRoutes(routers);
  return routes;
};

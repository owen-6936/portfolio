import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../components/Home";

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;

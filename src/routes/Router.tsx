import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [],
  },
];

const router = createBrowserRouter(routes);
export default router;

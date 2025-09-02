import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Home from '../components/Home';
import Contact from '../components/pages/Contact';
import NotFoundPage from '../components/pages/NotFound';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/portfolio' });
export default router;

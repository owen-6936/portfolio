import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Home from '../components/Home';
import Contact from '../components/pages/Contact';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
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

const router = createBrowserRouter(routes);
export default router;

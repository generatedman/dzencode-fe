import './styles/reset.scss';
import { Layout } from './components/Layout';
import { Products } from './components/Products';

import {RouterProvider, createHashRouter } from 'react-router-dom';


const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;

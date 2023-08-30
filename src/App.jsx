import './styles/reset.scss';
import { Layout } from './components/Layout';
import { Products } from './components/Products';

import {RouterProvider, createHashRouter } from 'react-router-dom';
import { Orders } from './components/Orders/Orders';


const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;

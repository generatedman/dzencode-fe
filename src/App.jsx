import './styles/reset.scss';
import { Layout } from './components/Layout';
import { Products } from './components/Products';

import {RouterProvider, createHashRouter } from 'react-router-dom';
import { Orders } from './components/Orders/Orders';
import { PageLayout } from './components/PageLayout';


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
      {
        path: '/1',
        element: <PageLayout />,
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;

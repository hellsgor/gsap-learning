import { createBrowserRouter } from 'react-router';
import { Layout } from '../layout';
import { MainPage } from '@/pages/main';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [{ index: true, Component: MainPage }],
  },
]);

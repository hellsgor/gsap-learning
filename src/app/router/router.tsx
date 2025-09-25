import { createBrowserRouter } from 'react-router';
import { Layout } from '../layout';
import { MainPage } from '@/pages/main';
import { GsapTo } from '@/pages/gsap-to';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: MainPage },
      {
        path: 'gsap-to',
        Component: GsapTo,
      },
    ],
  },
]);

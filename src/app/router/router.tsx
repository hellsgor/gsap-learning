import { createBrowserRouter } from 'react-router';
import { Layout } from '../layout';
import { MainPage } from '@/pages/main';
import { GsapTo } from '@/pages/gsap-to';
import { GsapFrom } from '@/pages/gsap-from';
import { GsapFromTo } from '@/pages/gsap-from-to';

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
      {
        path: 'gsap-from',
        Component: GsapFrom,
      },
      {
        path: 'gsap-from-to',
        Component: GsapFromTo,
      },
    ],
  },
]);

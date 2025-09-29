import { createBrowserRouter } from 'react-router';
import { Layout } from '../layout';
import { MainPage } from '@/pages/main';
import { GsapTo } from '@/pages/gsap-to';
import { GsapFrom } from '@/pages/gsap-from';
import { GsapFromTo } from '@/pages/gsap-from-to';
import { Timeline } from '@/pages/timeline';
import { GsapStagger } from '@/pages/gsap-stagger';
import { GsapScrollTrigger } from '@/pages/gsap-scroll-trigger';
import { GsapText } from '@/pages/gsap-text';

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
      {
        path: 'gsap-timeline',
        Component: Timeline,
      },
      { path: 'gsap-stagger', Component: GsapStagger },
      { path: 'gsap-scroll-trigger', Component: GsapScrollTrigger },
      { path: 'gsap-text', Component: GsapText },
    ],
  },
]);

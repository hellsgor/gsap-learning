import { createHashRouter } from 'react-router';
import { Layout } from '../layout';
import { MainPage } from '@/pages/main';
import { GsapTo } from '@/pages/gsap-to';
import { GsapFrom } from '@/pages/gsap-from';
import { GsapFromTo } from '@/pages/gsap-from-to';
import { Timeline } from '@/pages/timeline';
import { GsapStagger } from '@/pages/gsap-stagger';
import { GsapScrollTrigger } from '@/pages/gsap-scroll-trigger';
import { GsapText } from '@/pages/gsap-text';

export const router = createHashRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: MainPage,
        handle: { title: 'GSAP Learning - Главная' },
      },
      {
        path: 'gsap-to',
        Component: GsapTo,
        handle: { title: 'GSAP To - GSAP Learning' },
      },
      {
        path: 'gsap-from',
        Component: GsapFrom,
        handle: { title: 'GSAP From - GSAP Learning' },
      },
      {
        path: 'gsap-from-to',
        Component: GsapFromTo,
        handle: { title: 'GSAP FromTo - GSAP Learning' },
      },
      {
        path: 'gsap-timeline',
        Component: Timeline,
        handle: { title: 'GSAP Timeline - GSAP Learning' },
      },
      {
        path: 'gsap-stagger',
        Component: GsapStagger,
        handle: { title: 'GSAP Stagger - GSAP Learning' },
      },
      {
        path: 'gsap-scroll-trigger',
        Component: GsapScrollTrigger,
        handle: { title: 'GSAP ScrollTrigger - GSAP Learning' },
      },
      {
        path: 'gsap-text',
        Component: GsapText,
        handle: { title: 'GSAP Text - GSAP Learning' },
      },
    ],
  },
]);

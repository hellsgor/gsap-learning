import { ROUTES } from '@/shared/config';

export const CHAPTERS_LIST = [
  {
    href: ROUTES.gsapTo,
    text: 'GSAP To',
    description:
      'Для анимации элементов из их текущего состояния в новое состояние.',
  },

  {
    href: ROUTES.gsapFrom,
    text: 'GSAP From',
    description:
      'Используется для анимации элементов из нового состояния к их текущему состоянию.',
  },
] as const;

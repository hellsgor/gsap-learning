import { usePageTitle } from '@/shared/hooks/usePageTitle';
import { useMatches } from 'react-router';

export function TitleUpdater() {
  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];

  const routeTitle =
    (lastMatch?.handle as { title?: string })?.title || 'GSAP Learning';

  usePageTitle(routeTitle);

  return null;
}

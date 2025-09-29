import { Outlet } from 'react-router';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { TitleUpdater } from '@/shared/ui/title-updater';

export function Layout() {
  return (
    <>
      <TitleUpdater />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

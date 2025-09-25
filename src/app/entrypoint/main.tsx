import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../scss/index.scss';
import { Providers } from '../providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
);

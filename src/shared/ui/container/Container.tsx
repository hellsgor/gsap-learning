import type { ReactNode } from 'react';
import st from './container.module.scss';
import clsx from 'clsx';

export function Container({
  children,
  classes,
}: {
  children: ReactNode;
  classes?: string;
}) {
  return <div className={clsx(st.container, classes)}>{children}</div>;
}

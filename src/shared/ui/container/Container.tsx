import type { HTMLAttributes } from 'react';
import st from './container.module.scss';
import clsx from 'clsx';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  classes?: string;
};

export function Container({ children, classes, ...props }: ContainerProps) {
  return (
    <div className={clsx(st.container, classes)} {...props}>
      {children}
    </div>
  );
}

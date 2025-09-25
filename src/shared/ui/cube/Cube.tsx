import clsx from 'clsx';
import st from './cube.module.scss';
import type { HTMLAttributes } from 'react';

type CubeVariants = 'blue' | 'green';

type CubeProps = HTMLAttributes<HTMLDivElement> & {
  content?: string;
  variant?: CubeVariants;
  className?: string;
};

export function Cube({
  content,
  variant = 'blue',
  className,
  ...props
}: CubeProps) {
  return (
    <div
      className={clsx(st.cube, st[`cube_${variant}`] || null, className)}
      {...props}
    >
      {content && <span>{content}</span>}
    </div>
  );
}

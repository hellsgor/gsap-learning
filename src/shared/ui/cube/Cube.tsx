import clsx from 'clsx';
import st from './cube.module.scss';
import type { HTMLAttributes } from 'react';

type CubeVariants =
  | 'blue'
  | 'green'
  | 'orange'
  | 'yellow'
  | 'lavender-light'
  | 'lavender'
  | 'blue-light'
  | 'blue-medium'
  | 'blue-dark'
  | 'indigo'
  | 'indigo-dark';

type CubeProps = HTMLAttributes<HTMLDivElement> & {
  content?: string;
  variant?: CubeVariants;
  short?: boolean;
  className?: string;
};

export function Cube({
  content,
  variant = 'blue',
  short,
  className,
  ...props
}: CubeProps) {
  return (
    <div
      className={clsx(
        st.cube,
        st[`cube_${variant}`] || null,
        short && st.cube_short,
        className,
      )}
      {...props}
    >
      {content && <span>{content}</span>}
    </div>
  );
}

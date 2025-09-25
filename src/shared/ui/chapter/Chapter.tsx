import { Link } from 'react-router';
import st from './chapter.module.scss';

type ChapterProps = {
  href: string;
  text: string;
  description?: string;
};

export function Chapter({ href, text, description }: ChapterProps) {
  return (
    <li className={st.chapter}>
      <Link to={href}>
        <h3>{text}</h3>
      </Link>
      <p>{description}</p>
    </li>
  );
}

import { Chapter, Container } from '@/shared/ui';
import st from './MainPage.module.scss';
import { CHAPTERS_LIST } from '../config/chapters-list';

export function MainPage() {
  return (
    <section>
      <Container>
        <h1>GSAP Animations</h1>
        <ol className={st.chaptersList}>
          {CHAPTERS_LIST.map((chapter) => (
            <Chapter
              href={chapter.href}
              text={chapter.text}
              description={chapter.description}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}

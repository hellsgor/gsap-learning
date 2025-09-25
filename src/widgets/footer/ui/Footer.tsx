import { Container } from '@/shared/ui';
import st from './footer.module.scss';

export function Footer() {
  return (
    <div className={st.footer}>
      <Container classes={st.footer__wrapper}>
        <p>It's only for learning GSAP</p>
      </Container>
    </div>
  );
}

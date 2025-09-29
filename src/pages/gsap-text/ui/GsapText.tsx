import { Container } from '@/shared/ui';

export function GsapText() {
  return (
    <>
      <section>
        <Container>
          <div className="content">
            <h1>GSAP text animation</h1>
            <p>
              Мы можем использовать те же методы, такие как{' '}
              <code>gsap.to()</code>, <code>gsap.from()</code>,{' '}
              <code>gsap.fromTo()</code> и <code>gsap.timeline()</code>, чтобы
              анимировать текст.
            </p>
            <p>
              С помощью этих методов можно реализовать различные текстовые
              анимации и эффекты, такие как появление (fade in), исчезновение
              (fade out), выезд (slide in), выезд наружу (slide out) и многое
              другое.
            </p>
            <p>
              Для более продвинутых текстовых анимаций и эффектов можно
              использовать GSAP TextPlugin или сторонние библиотеки,
              специализирующиеся на анимации текста.
            </p>
            <p>
              Узнайте больше о плагине{' '}
              <a
                href="https://gsap.com/docs/v3/Plugins/TextPlugin"
                target="_blank"
              >
                TextPlugin
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

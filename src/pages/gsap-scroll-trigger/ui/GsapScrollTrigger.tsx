import { Container } from '@/shared/ui';

export function GsapScrollTrigger() {
  return (
    <>
      <section>
        <Container>
          <div className="content">
            <h1>Gsap ScrollTrigger</h1>
            <p>
              Gsap ScrollTrigger — это плагин, который позволяет создавать
              анимации, запускаемые позицией прокрутки страницы.
            </p>
            <p>
              С помощью ScrollTrigger можно задавать различные действия, которые
              будут запускаться в определённых точках скролла, например: запуск
              или завершение анимации, «прокрутка» анимаций вместе с
              пользователем, закрепление элементов на экране и многое другое.
            </p>
            <p>
              Узнайте больше о методе{' '}
              <a
                href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
                target="_blank"
              >
                gsap scroll trigger
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

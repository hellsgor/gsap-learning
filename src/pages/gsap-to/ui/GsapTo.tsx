import { Container } from '@/shared/ui';

export function GsapTo() {
  return (
    <section>
      <Container>
        <div className="content">
          <h1>GsapTo</h1>
          <p>
            Метод <code>gsap.to()</code> используется для анимации элементов из
            их текущего состояния в новое состояние.
          </p>
          <p>
            Метод <code>gsap.to()</code> похож на метод <code>gsap.from()</code>
            , но разница в том, что <code>gsap.to()</code> анимирует элементы из
            их текущего состояния в новое, тогда как <code>gsap.from()</code>{' '}
            анимирует элементы из нового состояния к их текущему состоянию.
          </p>
          <p>
            Узнайте больше о методе{' '}
            <code>
              <a target="_blank" href="https://gsap.com/docs/v3/GSAP/gsap.to()">
                gsap.to()
              </a>
            </code>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}

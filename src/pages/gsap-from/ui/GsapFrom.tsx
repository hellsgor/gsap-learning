import { Container } from '@/shared/ui';

export function GsapFrom() {
  return (
    <>
      <section>
        <Container>
          <div className="content">
            <h1>GsapFrom</h1>
            <p>
              Метод <code>gsap.from()</code> используется для анимации элементов
              из нового состояния к их текущему состоянию.
            </p>
            <p>
              Метод <code>gsap.from()</code> похож на метод{' '}
              <code>gsap.to()</code>, но разница в том, что{' '}
              <code>gsap.from()</code> анимирует элементы из нового состояния к
              их текущему состоянию, в то время как <code>gsap.to()</code>{' '}
              анимирует элементы из их текущего состояния в новое состояние.
            </p>
            Узнате больше о методе{' '}
            <code>
              <a
                href="https://gsap.com/docs/v3/GSAP/gsap.from()"
                target="_blank"
              >
                gsap.from()
              </a>
            </code>
            .
          </div>
        </Container>
      </section>
    </>
  );
}

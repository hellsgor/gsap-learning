import { Container } from '@/shared/ui';

export function Timeline() {
  return (
    <>
      <section>
        <Container>
          <div className="content">
            <h1>GsapTimeline</h1>
            <p>
              Метод <code>gsap.timeline()</code> используется для создания
              экземпляра таймлайна, который можно использовать для управления
              несколькими анимациями.
            </p>
            <p>
              Метод <code>gsap.timeline()</code> похож на методы{' '}
              <code>gsap.to()</code>, <code>gsap.from()</code> и{' '}
              <code>gsap.fromTo()</code>, но разница в том, что{' '}
              <code>gsap.timeline()</code> создаёт экземпляр таймлайна, с
              помощью которого можно управлять несколькими анимациями. В то
              время как методы <code>gsap.to()</code>, <code>gsap.from()</code>{' '}
              и <code>gsap.fromTo()</code> используются для анимации элементов:
            </p>
            <ul>
              <li>из их текущего состояния в новое состояние;</li>
              <li>из нового состояния в их текущее состояние;</li>
              <li>и из нового состояния в новое состояние соответственно.</li>
            </ul>
            <p>
              Узнате больше о методе{' '}
              <a href="https://gsap.com/docs/v3/GSAP/Timeline" target="_blank">
                gsap.timeline()
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

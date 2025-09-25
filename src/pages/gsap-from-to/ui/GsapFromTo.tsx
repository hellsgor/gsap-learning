import { Container, Cube } from '@/shared/ui';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function GsapFromTo() {
  useGSAP(() => {
    gsap.fromTo(
      '#cube-orange',
      {
        x: 0,
        rotation: 0,
        borderRadius: '0%',
      },
      {
        x: 250,
        borderRadius: '100%',
        repeat: -1,
        yoyo: true,
        duration: 2,
        rotation: 280,
        ease: 'bounce.out',
      },
    );
  }, []);

  return (
    <>
      <section>
        <Container>
          <div className="content">
            <h1>GsapFromTo</h1>
            <p>
              Метод <code>gsap.fromTo()</code> используется для анимации
              элементов из нового состояния в новое состояние.
            </p>
            <p>
              Метод <code>gsap.fromTo()</code> похож на методы{' '}
              <code>gsap.from()</code> и <code>gsap.to()</code>, но разница в
              том, что <code>gsap.fromTo()</code> анимирует элементы из нового
              состояния в новое состояние, в то время как{' '}
              <code>gsap.from()</code> анимирует элементы из нового состояния к
              их текущему состоянию, а <code>gsap.to()</code> — из их текущего
              состояния в новое состояние.
            </p>
            Узнайте больше о методе{' '}
            <code>
              <a
                href="https://gsap.com/docs/v3/GSAP/gsap.fromTo()"
                target="_blank"
              >
                gsap.fromTo()
              </a>
            </code>
            .
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <Cube variant="orange" id="cube-orange" />
        </Container>
      </section>
    </>
  );
}

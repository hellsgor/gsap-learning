import { Container, Cube } from '@/shared/ui';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function GsapFrom() {
  useGSAP(() => {
    gsap.from('#cube-green', {
      x: 250,
      repeat: -1,
      yoyo: true,
      duration: 2,
      rotation: 360,
      ease: 'power1.inOut',
    });
  }, []);
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

      <section>
        <Container>
          <Cube variant="green" id="cube-green" />
        </Container>
      </section>
    </>
  );
}

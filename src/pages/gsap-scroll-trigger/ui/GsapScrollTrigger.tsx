import { Container, Cube } from '@/shared/ui';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function GsapScrollTrigger() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!scrollRef.current?.children) return;
      const cubes = gsap.utils.toArray(
        scrollRef.current.children,
      ) as HTMLElement[];

      cubes.forEach((cube) => {
        gsap.to(cube, {
          x: 150 * (cubes.indexOf(cube) + 3),
          rotation: 360,
          borderRadius: '100%',
          scale: 1.5,
          scrollTrigger: {
            trigger: cube,
            start: 'bottom bottom',
            end: 'top 10%',
            scrub: true,
            markers: true,
          },
          ease: 'power1.inOut',
        });
      });
    },
    { scope: scrollRef },
  );
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

      <section>
        <Container>
          <div className="scroll-container" ref={scrollRef}>
            <Cube variant="pink" className="scroll-cube" />
            <Cube variant="orange" className="scroll-cube" />
          </div>
          <div style={{ height: '300px' }}></div>
        </Container>
      </section>
    </>
  );
}

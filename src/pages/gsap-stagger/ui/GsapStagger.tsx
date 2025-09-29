import { Container, Cube } from '@/shared/ui';

export function GsapStagger() {
  const cubeVariants = [
    'lavender-light',
    'lavender',
    'blue-light',
    'blue-medium',
    'blue-dark',
    'indigo',
    'indigo-dark',
  ] as const;

  return (
    <>
      <section>
        <Container>
          <div className="content">
            <h1>GsapStagger</h1>
            <p>
              GSAP stagger — это функция, которая позволяет применять анимации с
              пошаговой задержкой к группе элементов.
            </p>
            <p>
              Используя функцию stagger в GSAP, можно задать время задержки
              между анимациями каждого элемента, а также настроить сглаживание
              (easing) и длительность каждой отдельной анимации. Это позволяет
              создавать динамичные и визуально привлекательные эффекты, такие
              как последовательное появление (staggered fades), вращения,
              движения и многое другое.
            </p>
            <p>
              Узнайте больше о функции{' '}
              <a
                href="https://gsap.com/resources/getting-started/Staggers"
                target="_blank"
              >
                Gsap Stagger
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container style={{ display: 'flex', columnGap: '16px' }}>
          {cubeVariants.map((cubeVariant) => (
            <Cube key={cubeVariant} short variant={cubeVariant} />
          ))}
        </Container>
      </section>
    </>
  );
}

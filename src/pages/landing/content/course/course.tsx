import { useCallback, useEffect, useRef, useState } from 'react';

import { Row } from '@components/Grid/grid';
import { LandingTitle } from '@components/LandingTitle';

import { ILandingPage } from '@pages/landing/content/content';
import { CourseItem } from '@pages/landing/content/course/item';

import { courseData } from './data';
import styles from './styles.module.scss';

export function Course({ index, id }: ILandingPage) {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);
  const [anim, setAnim] = useState(0);

  const scrollWrapper = useCallback(
    (e) => {
      e.preventDefault();
      const refAnim = ref.current;
      if (!refAnim) return;

      // анимация завязана на высоте враппера + 100px
      // При очень быстром скроле происходит проскакивание экрана - пофиксить
      const bottomStop = anim >= refAnim.clientHeight + 100 - window.innerHeight && e.deltaY > 0;
      const topStop = anim === 0 && anim > e.deltaY;

      if (topStop || bottomStop) {
        window.animatedLandingBlock = null;
        return;
      }

      if (!window.animatedLandingBlock) {
        window.animatedLandingBlock = ref.current;
      }

      if (anim !== undefined && ref.current) {
        setAnim(anim + e.deltaY);
      }
    },
    [ref, anim]
  );

  useEffect(() => {
    if (refContainer.current) {
      refContainer.current.addEventListener('wheel', scrollWrapper);
    }
  }, [scrollWrapper]);

  return (
    <div className={styles.Course} id={id} ref={refContainer}>
      <Row ref={titleRef}>
        <LandingTitle
          title="Чему Вы"
          space
          colorText="научитесь?"
          className={styles.Course__heading}
        />
      </Row>
      <div className={styles.Course__relative}>
        <div className={styles.Course__row}>
          <div
            className={styles.Course__wrapper}
            ref={ref}
            style={{ transform: `translateY(-${anim}px)` }}
          >
            {courseData.map((el, index) => (
              <CourseItem el={el} key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

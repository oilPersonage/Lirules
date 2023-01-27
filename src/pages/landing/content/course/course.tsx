import { useEffect, useRef } from 'react';

import { Row } from '@components/Grid/grid';
import { LandingTitle } from '@components/LandingTitle';

import { ILandingPage } from '@pages/landing/content/content';
import { CourseItem } from '@pages/landing/content/course/item';

import { courseData } from './data';
import styles from './styles.scss';

export function Course({ index, id }: ILandingPage) {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('wheel', (e) => {
        if (!window.animatedLandingBlock) {
          window.animatedLandingBlock = ref.current;
        }

        const el = ref?.current?.getBoundingClientRect();
        if (
          ((el &&
            Math.round(Math.abs(el.top)) >= Math.floor(el.height - window.innerHeight - 30)) ||
            (titleRef.current && el && el.top >= titleRef.current.clientHeight - 30)) &&
          window.animatedLandingBlock
        ) {
          window.animatedLandingBlock = null;
        }
      });
    }
  }, []);

  return (
    <div className={styles.Course} id={id}>
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
          <div className={styles.Course__wrapper} ref={ref}>
            {courseData.map((el, index) => (
              <CourseItem el={el} key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

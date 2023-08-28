import { useEffect, useRef } from 'react';

import { ThailandAnimationDirection } from '@pages/guide/pages/thailand/content/content';

import styles from './styles.module.scss';

export function Second({ setRefObject }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (h1Ref.current && containerRef.current) {
      const { top, bottom, height } = containerRef.current.getBoundingClientRect();

      const animatedItem = {
        elem: h1Ref.current,
        start: -40,
        speed: -1,
        end: -70,
        top: top,
        bottom: bottom,
        height: height,
        direction: ThailandAnimationDirection.HORIZONTAL,
      };
      setRefObject(animatedItem);
    }
  }, [containerRef, h1Ref, setRefObject]);

  return (
    <div className={styles.Second} ref={containerRef}>
      <h1 className={styles.Second__h1} ref={h1Ref}>
        TEXT
      </h1>
    </div>
  );
}

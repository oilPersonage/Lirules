import { MutableRefObject, RefObject, useCallback, useEffect, useRef } from 'react';

import { ThailandHeader } from '@pages/guide/pages/thailand/content/sections/header/header';
import { Second } from '@pages/guide/pages/thailand/content/sections/second';

import styles from './styles.module.scss';

export type ContentProps = {
  isStartAnimate: boolean;
  refs: {
    buttonRef: RefObject<HTMLDivElement>;
    headingRef: RefObject<HTMLDivElement>;
    socialRef: MutableRefObject<{}>;
  };
};

export enum ThailandAnimationDirection {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export type TAnimatedRef = {
  elem: HTMLDivElement;
  start: number;
  speed: number;
  end: number;
  top: number;
  bottom: number;
  height: number;
  direction: ThailandAnimationDirection;
};

const SCROLL_SPEED = 600;

export function Content({ refs, isStartAnimate }: ContentProps) {
  const animatedRefs = useRef<TAnimatedRef[]>([]);

  // detect sections
  const scrollWrapper = useRef<HTMLDivElement>(null);
  const containerWrapper = useRef<HTMLDivElement>(null);

  const refDelta = useRef(0);

  function createHelper(position: number, color: string): HTMLDivElement {
    const topDiv = document.createElement('div');
    topDiv.style.position = 'absolute';
    topDiv.style.width = '100px';
    topDiv.style.top = `${position}px`;
    topDiv.style.height = '2px';
    topDiv.style.zIndex = '3';
    topDiv.style.background = color;
    return topDiv;
  }

  // init HELPERS
  useEffect(() => {
    if (animatedRefs.current) {
      const scrollTop = scrollWrapper?.current?.scrollTop || 0;
      animatedRefs.current.forEach(({ top, bottom, height, end, start, elem }) => {
        const topBorder = top + height * (start / 100) - scrollTop;
        const bottomBorder = bottom + (height * end) / 100;
        const topHelper = createHelper(topBorder, 'red');
        const bottomHelper = createHelper(bottomBorder, 'green');
        containerWrapper?.current?.appendChild(topHelper);
        containerWrapper?.current?.appendChild(bottomHelper);
      });
    }
  }, [scrollWrapper, animatedRefs, containerWrapper]);

  const onScroll = useCallback((event) => {
    const deltaY = event.deltaY || 0;
    refDelta.current += deltaY;

    const scrollTop = scrollWrapper?.current?.scrollTop || 0;
    if (animatedRefs.current) {
      animatedRefs.current.forEach(
        ({ direction, top, bottom, height, speed, end, start, elem }) => {
          const topBorder = top + height * (start / 100);
          const bottomBorder = bottom + (height * end) / 100;

          if (topBorder - scrollTop < 0 && bottomBorder - scrollTop > 0) {
            const progress = (scrollTop - topBorder) / (bottomBorder - topBorder);

            const position = progress * (SCROLL_SPEED * speed);
            if (direction === ThailandAnimationDirection.HORIZONTAL) {
              elem.style.transform = `matrix(1, 0, 0, 1, ${position}, 0)`;
            } else {
              elem.style.transform = `matrix(1, 0, 0, 1, 0, ${position})`;
            }
          }
        }
      );
    }
  }, []);

  const setRefObject = useCallback((item: TAnimatedRef) => {
    animatedRefs.current.push(item);
  }, []);

  return (
    <div className={styles.Thailand} ref={scrollWrapper} onScroll={onScroll}>
      <div ref={containerWrapper} style={{ position: 'relative' }}>
        <ThailandHeader refs={refs} isStartAnimate={isStartAnimate} />
        <div className={styles.Thailand__abs}>1</div>
        <div style={{ background: 'gray' }} className={styles.Thailand__abs}>
          <Second setRefObject={setRefObject} />
        </div>
        <div style={{ background: 'darkolivegreen' }} className={styles.Thailand__abs}>
          2
        </div>
        <div className={styles.Thailand__abs}>4</div>
      </div>
    </div>
  );
}

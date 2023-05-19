import { MutableRefObject, RefObject, useMemo } from 'react';

import Budda from '@icons/budda.svg';
import cn from 'classnames';

import { GreenButton } from '@components/GreenButton';

import { Carousel } from '@pages/guide/components/carousel';
import { carouselItems } from '@pages/guide/pages/thailand/carousel/items';

import styles from './styles.scss';

export type ContentProps = {
  isStartAnimate: boolean;
  refs: {
    buttonRef: RefObject<HTMLDivElement>;
    headingRef: RefObject<HTMLDivElement>;
    socialRef: MutableRefObject<{}>;
  };
};

export function Content({ refs, isStartAnimate }: ContentProps) {
  const { buttonRef, headingRef } = refs;
  return (
    <div className={styles.Thailand}>
      {/*<div className={cn(styles.Thailand__black, styles.Thailand__black_top)} ref={topBlack} />*/}
      {/*<div*/}
      {/*  className={cn(styles.Thailand__black, styles.Thailand__black_bottom)}*/}
      {/*  ref={bottomBlack}*/}
      {/*/>*/}
      <Carousel items={carouselItems} headingRef={headingRef} isStartAnimate={isStartAnimate} />

      <div className={styles.Thailand__content}>
        <div className={styles.Thailand__button} ref={buttonRef}>
          <GreenButton text="Приобрести" icon={Budda} />
        </div>
      </div>
    </div>
  );
}

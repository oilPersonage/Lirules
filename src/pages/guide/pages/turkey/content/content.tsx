import { MutableRefObject, RefObject, useMemo } from 'react';

import Budda from '@icons/budda.svg';
import cn from 'classnames';

import { GreenButton } from '@components/GreenButton';

import { Carousel } from '@pages/guide/components/carousel';
import { carouselItems } from '@pages/guide/pages/thailand/carousel/items';
import { ContentProps } from '@pages/guide/pages/thailand/content/content';

import styles from './styles.scss';

export function Content({ refs, isStartAnimate }: ContentProps) {
  const { buttonRef, headingRef } = refs;

  return (
    <div className={styles.Thailand}>
      <Carousel items={carouselItems} isStartAnimate={isStartAnimate} headingRef={headingRef} />

      <div className={styles.Thailand__content}>
        <div className={styles.Thailand__button} ref={buttonRef}>
          <GreenButton text="Приобрести" icon={Budda} />
        </div>
      </div>
    </div>
  );
}

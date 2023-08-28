import { RefObject } from 'react';

import cn from 'classnames';

import { TCarouselItem } from '@pages/guide/pages/thailand/carousel/items';

import styles from './styles.module.scss';

export type TCarouselItemProps = {
  el: TCarouselItem;
  index: number;
  isStartAnimate: boolean;
  headingRef?: RefObject<HTMLDivElement>;
  isDark?: boolean;
  isPrev: boolean;
};

export function CarouselItem({
  el,
  index,
  isStartAnimate,
  isDark,
  isPrev,
  headingRef,
}: TCarouselItemProps) {
  return (
    <div key={index} data-id={index} className={styles.CarouselItem}>
      <div
        className={cn(styles.CarouselItem__imagesWrapper, {
          [styles.CarouselItem__imagesWrapper_dark]: isDark && isStartAnimate,
        })}
      >
        <div className={styles.CarouselItem__absolute}>
          <img src={el.imgBack} alt="" />
        </div>
        {el.heading && (
          <div className={styles.CarouselItem__heading} ref={headingRef}>
            {el.heading}
          </div>
        )}
        {el.imgMiddle && (
          <div className={styles.CarouselItem__absolute}>
            <img src={el.imgMiddle} alt="" />
          </div>
        )}
        {el.imgFront && (
          <div className={cn(styles.CarouselItem__absolute, styles.CarouselItem__absolute_front)}>
            <img src={el.imgFront} alt="" />
          </div>
        )}
      </div>
      <div className={styles.CarouselItem__description}>
        {el.description({ isStartAnimate, isPrev })}
      </div>
    </div>
  );
}

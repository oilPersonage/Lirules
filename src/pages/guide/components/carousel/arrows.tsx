import { ReactComponent as Arrow } from '@icons/angle-right.svg';
import cn from 'classnames';

import styles from '@pages/guide/components/carousel/styles.module.scss';

export function Arrows({ isStartAnimate, showArrow, handleNextSlide }) {
  return (
    <div
      className={cn(styles.Carousel__arrows, { [styles.Carousel__arrows_show]: isStartAnimate })}
    >
      <div
        className={cn(styles.Carousel__arrowsLeft, {
          [styles.Carousel__arrowsLeft_show]: showArrow === 'left' || showArrow === 'all',
        })}
        onClick={() => handleNextSlide(-1)}
      >
        <div className={styles.Carousel__arrowIcon}>
          <Arrow viewBox="0 0 48 48" />
        </div>
      </div>
      <div
        className={cn(styles.Carousel__arrowsRight, {
          [styles.Carousel__arrowsRight_show]: showArrow === 'right' || showArrow === 'all',
        })}
        onClick={() => handleNextSlide(1)}
      >
        <div className={styles.Carousel__arrowIcon}>
          <Arrow viewBox="0 0 48 48" />
        </div>
      </div>
    </div>
  );
}

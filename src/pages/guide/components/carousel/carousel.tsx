import { RefObject, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import Arrow from '@icons/angle-right.svg';
import cn from 'classnames';
import gsap from 'gsap';

import { easingInOut } from '@utils/customEase';

import { TCarouselItems } from '@pages/guide/pages/thailand/carousel/items';

import styles from './styles.scss';

type TCarouselProps = {
  items: TCarouselItems;
  headingRef: RefObject<HTMLDivElement>;
  descriptionRef: RefObject<HTMLDivElement>;
};

export function Carousel({ items, headingRef, descriptionRef }: TCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);

  const firstItem = items[0];

  const wrapperRef = useRef<HTMLDivElement>(null);
  const length = items.length;

  useLayoutEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.height = items.length * 100 + 'vh';
    }
  }, [items, wrapperRef]);

  function handleNextSlide(direction): undefined | void {
    if (isAnimate) return undefined;
    setIsAnimate(true);

    const tl = gsap.timeline();
    const nextIndex = direction + activeIndex;
    const isNext = nextIndex <= length - 1;
    const isPrev = nextIndex >= 0;

    if (!isNext || !isPrev) {
      setIsAnimate(false);
      return undefined;
    }

    const nextTransform =
      direction > 0 ? nextIndex * 100 * direction * -1 : nextIndex * 100 * direction;

    tl.to(wrapperRef.current, {
      y: nextTransform + 'vh',
      duration: 1,
      ease: easingInOut,
      onComplete: () => {
        setActiveIndex(nextIndex);
        setIsAnimate(false);
      },
    });
  }

  const showArrow = useMemo((): 'right' | 'left' | 'all' | undefined => {
    if (activeIndex <= length - 2 && activeIndex > 0) {
      return 'all';
    }
    if (activeIndex <= length - 2) {
      return 'right';
    }
    if (activeIndex > 0) {
      return 'left';
    }
    return undefined;
  }, [length, activeIndex]);

  const renderItems = [...items].splice(1);

  return (
    <div className={styles.Carousel}>
      <div className={styles.Carousel__wrapper} ref={wrapperRef}>
        <div className={styles.CarouselItem}>
          <div className={styles.CarouselItem__absolute}>
            <img src={firstItem.imgBack} alt="" />
          </div>
          <div className={styles.CarouselItem__heading} ref={headingRef}>
            {firstItem.heading}
          </div>
          <p ref={descriptionRef} className={styles.CarouselItem__description}>
            {firstItem.description}
          </p>
          {firstItem.imgMiddle && (
            <div className={styles.CarouselItem__absolute}>
              <img src={firstItem.imgMiddle} alt="" />
            </div>
          )}
          {firstItem.imgFront && (
            <div className={cn(styles.CarouselItem__absolute, styles.CarouselItem__absolute_front)}>
              <img src={firstItem.imgFront} alt="" />
            </div>
          )}
        </div>

        {renderItems.map((el, index) => (
          <div
            key={index}
            data-id={index}
            className={cn(styles.CarouselItem, {
              [styles.CarouselItem_active]: index === activeIndex - 1,
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
            <div className={styles.CarouselItem__description}>{el.description}</div>
            {el.imgMiddle && (
              <div className={styles.CarouselItem__absolute}>
                <img src={el.imgMiddle} alt="" />
              </div>
            )}
            {el.imgFront && (
              <div
                className={cn(styles.CarouselItem__absolute, styles.CarouselItem__absolute_front)}
              >
                <img src={el.imgFront} alt="" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.Carousel__count}>
        0{activeIndex + 1}
        <span>/ 0{length}</span>
      </div>
      <div className={styles.Carousel__arrows}>
        <div
          className={cn(styles.Carousel__arrowsLeft, {
            [styles.Carousel__arrowsLeft_show]: showArrow === 'left' || showArrow === 'all',
          })}
          onClick={() => handleNextSlide(-1)}
        >
          <Arrow />
        </div>
        <div
          className={cn(styles.Carousel__arrowsRight, {
            [styles.Carousel__arrowsRight_show]: showArrow === 'right' || showArrow === 'all',
          })}
          onClick={() => handleNextSlide(1)}
        >
          <Arrow />
        </div>
      </div>
    </div>
  );
}

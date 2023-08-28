import { RefObject, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import cn from 'classnames';
import gsap from 'gsap';

import { Arrows } from '@pages/guide/components/carousel/arrows';
import { CarouselItem } from '@pages/guide/components/carousel/item';
import { TCarouselItems } from '@pages/guide/pages/thailand/carousel/items';

import styles from './styles.module.scss';

type TCarouselProps = {
  items: TCarouselItems;
  headingRef: RefObject<HTMLDivElement>;
  isStartAnimate: boolean;
};

export function Carousel({ items, headingRef, isStartAnimate }: TCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indexForCount, setIndexForCount] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | undefined>(undefined);
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
    const windowHeight = window.innerHeight;

    setPrevIndex(activeIndex);

    const nextIndex = direction + activeIndex;
    const isNext = nextIndex <= length - 1;
    const isPrev = nextIndex >= 0;

    if (!isNext || !isPrev) {
      setIsAnimate(false);
      return undefined;
    }

    const nextTransform =
      direction > 0
        ? nextIndex * windowHeight * direction * -1
        : nextIndex * windowHeight * direction;

    setActiveIndex(nextIndex);
    setTimeout(() => {
      setIsAnimate(false);
      setIndexForCount(nextIndex);
    }, 2000);

    // gsap.to(wrapperRef.current, {
    //   transform: `translateY(${nextTransform}px)`,
    //   duration: 1,
    //   // ease: easingInOut,
    //   onComplete: () => {
    //     // setActiveIndex(nextIndex);
    //     setIsAnimate(false);
    //   },
    // });
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
      <div
        className={styles.Carousel__wrapper}
        style={{ transform: `translateY(-${activeIndex * 100}vh)` }}
        ref={wrapperRef}
      >
        <div className={styles.CarouselItem}>
          <CarouselItem
            key={0}
            el={firstItem}
            isPrev={prevIndex === 0}
            index={0}
            isDark
            isStartAnimate={isStartAnimate && 0 === activeIndex}
            headingRef={headingRef}
          />
        </div>

        {renderItems.map((el, index) => (
          <CarouselItem
            key={index}
            el={el}
            isPrev={prevIndex === index}
            index={index}
            isStartAnimate={isStartAnimate && index === activeIndex}
          />
        ))}
      </div>
      <div
        className={cn(styles.Carousel__count, { [styles.Carousel__count_show]: isStartAnimate })}
      >
        0{indexForCount + 1}
        <span>/ 0{length}</span>
      </div>
      <Arrows
        showArrow={showArrow}
        isStartAnimate={isStartAnimate}
        handleNextSlide={handleNextSlide}
      />
    </div>
  );
}

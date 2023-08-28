import { useEffect, useRef, useState } from 'react';

import { useMobileDetect } from '@hooks/useMobileDetect';
import { ReactComponent as Arrow } from '@icons/arrow.svg';
import { ReactComponent as Blogger } from '@images/landing/blogger.webp';
import { ReactComponent as Model } from '@images/landing/model.webp';
import { ReactComponent as Photograph } from '@images/landing/photograph.webp';
import { ReactComponent as VideoMaker } from '@images/landing/video.webp';
import cn from 'classnames';

import { onChangeCursorDot } from '@utils/onChangeCursorDot';

import { onTouchDetect } from '@pages/landing/content/about/сarousel/touchEvent';

import styles from './styles.module.scss';

interface IItems {
  title: string[];
  desc?: string[];
  className?: string;
  img: string;
}

const ITEMS: IItems[] = [
  {
    title: ['VIDEO', 'MAKER'],
    desc: ['5 лет', 'Более 150 учеников', 'Разные страны'],
    img: VideoMaker,
  },
  {
    title: ['PHOTO', 'GRAPH'],
    desc: ['8 лет', 'Ретушь', 'Цветокоррекция'],
    img: Photograph,
    className: styles.Carousel__photograph,
  },
  { title: ['MODEL'], desc: ['8 лет', 'Москва', 'Топовые фотосессии'], img: Model },
  {
    title: ['TRAVEL', 'BLOGGER'],
    img: Blogger,
    desc: ['Крым', 'Все уголочки Турции', 'Москва', 'Кавказ', 'Грузия'],
  },
];

export function Carousel() {
  const ref = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLUListElement>(null);
  const firstItemRef = useRef<HTMLLIElement>(null);
  const refTouch = useRef(new onTouchDetect());

  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);
  const [deffSliderWidth, setDeffSliderWidth] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState<undefined | number>(undefined);
  const isMobile = useMobileDetect();

  // set fix height for all items and carousel
  // useEffect(() => {
  //   if (ref.current) {
  //     // setCarouselHeight(ref.current.clientHeight);
  //   }
  // }, [ref, firstItemRef]);
  //
  useEffect(() => {
    if (firstItemRef.current && ITEMS.length > 0) {
      setDeffSliderWidth(firstItemRef.current.clientWidth);
    }
  }, [firstItemRef]);

  function setSlide(next) {
    setActiveSlide((v) => (v + next < 0 || v + next === ITEMS.length ? v : v + next));
  }

  function onTouch(e) {
    const touch = refTouch.current.onTouch(e);

    if (touch.dist > 50 && !isAnimate && touch.isMoveToX) {
      setIsAnimate(true);
      setActiveSlide((v) =>
        v + touch.direction < 0 || v + touch.direction === ITEMS.length ? v : v + touch.direction
      );
      setTimeout(() => {
        setIsAnimate(false);
      }, 300);
    }
  }

  return (
    <div
      className={styles.Carousel}
      ref={ref}
      style={{ maxHeight: carouselHeight || 'auto', minHeight: carouselHeight || 'auto' }}
      onTouchStart={onTouch}
      onTouchMove={onTouch}
    >
      <ul
        className={styles.Carousel__wrapper}
        ref={wrapper}
        style={{
          transform: `translateX(-${
            activeSlide * ((isMobile ? deffSliderWidth : deffSliderWidth / 2) + 60)
          }px)`,
        }}
      >
        {ITEMS.map((item, index) => (
          <li
            key={index}
            ref={index === 0 ? firstItemRef : null}
            className={cn(styles.Carousel__item, {
              [styles.Carousel__item_prevActive]: activeSlide > index,
              [styles.Carousel__item_nextActive]: activeSlide < index,
            })}
          >
            <div className={styles.Carousel__content}>
              <div className={styles.Carousel__itemTitle}>
                {item.title.map((t, index) => (
                  <p key={index}>{t}</p>
                ))}
              </div>
              <p className={styles.Carousel__itemDesc}>
                {item.desc?.map((el) => (
                  <span key={el}>{el}</span>
                ))}
              </p>
              <div className={cn(styles.Carousel__itemImg, item.className)}>
                <img src={item.img} alt="" loading="lazy" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.Carousel__arrows}>
        <Arrow
          onClick={() => activeSlide !== 0 && setSlide(-1)}
          className={cn({ [styles.Carousel__arrowDisable]: activeSlide === 0 })}
          onMouseEnter={onChangeCursorDot}
          onMouseLeave={onChangeCursorDot}
        />
        <Arrow
          className={cn(styles.Carousel__arrowRight, {
            [styles.Carousel__arrowDisable]: activeSlide === ITEMS.length - 1,
          })}
          onMouseEnter={onChangeCursorDot}
          onMouseLeave={onChangeCursorDot}
          onClick={() => activeSlide !== ITEMS.length - 1 && setSlide(1)}
        />
      </div>
      <div className={styles.Carousel__dots}>
        {ITEMS.map((item, index) => (
          <span key={index} className={styles.Carousel__dot} />
        ))}
        <span
          style={{
            transform: `translateX(${activeSlide * 24}px)`,
          }}
          className={cn(styles.Carousel__dot, styles.Carousel__dot_active)}
        />
      </div>
    </div>
  );
}

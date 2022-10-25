import { useEffect, useRef, useState } from 'react';

import Dollar from '@icons/dollar.svg';
import Lock from '@icons/lock.svg';
import cn from 'classnames';

import { Button } from '@components/Button';
import { LandingTitle } from '@components/LandingTitle';

import { TariffType, TARIFF_LIST } from '@pages/landing/content/tariffs/const';

import styles from './styles.scss';

const PRICE_HEIGHT = 24;

export function MobileTariffs() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  function onTouch(event) {
    const touch = event.touches[0] || event.changedTouches[0];
    if (event.type === 'touchstart') {
      touchStartRef.current = { x: touch.pageX, y: touch.pageY };
    } else if (event.type === 'touchmove' && touchStartRef.current) {
      const deltaX = touch.pageX;
      const deltaY = touch.pageY;
      const dist = Math.abs(deltaX - touchStartRef.current?.x);
      const moveToX = dist > Math.abs(deltaY - touchStartRef.current?.y);
      const direction = deltaX - touchStartRef.current?.x > 0 ? -1 : 1;
      if (moveToX && dist > 10 && carouselRef.current && !isAnimate) {
        setIsAnimate(true);
        setActiveSlide((v) =>
          v + direction < 0 || v + direction > TARIFF_LIST.length - 1 ? v : v + direction
        );
        setTimeout(() => {
          setIsAnimate(false);
        }, 300);
      }
    }
  }

  useEffect(() => {
    const width = document.body.clientWidth;
    if (carouselRef.current && buttonRef.current) {
      carouselRef.current.style.transform = `translateX(-${width * activeSlide}px)`;
      buttonRef.current.style.transform = `translateY(-${PRICE_HEIGHT * activeSlide}px)`;
    }
  }, [carouselRef, activeSlide, buttonRef]);

  return (
    <div className={styles.Mobile__wrapper}>
      <div className={styles.Mobile__titleWrapper}>
        <LandingTitle title="Tariff" colorText="s" />
      </div>
      <div className={styles.Mobile} onTouchStart={onTouch} onTouchMove={onTouch}>
        <div className={styles.Mobile__carousel} ref={carouselRef}>
          {TARIFF_LIST.map((tariff) => (
            <div key={tariff.id} className={cn(styles.Mobile__item)}>
              <div className={styles.Mobile__textWrapper}>
                <div className={styles.Mobile__title}>
                  <p className={styles.Mobile__titleWhite}>{tariff.title}</p>
                  <p className={styles.Mobile__titleAccent}>{tariff.colorize}</p>
                </div>
                <p className={styles.Mobile__description}>{tariff.description}</p>

                <ul className={styles.Mobile__list}>
                  {tariff.list.map((el, index) => (
                    <li
                      key={index}
                      className={cn(styles.Mobile__listItem, {
                        [styles.Mobile__listItem_disabled]: el.disabled,
                      })}
                    >
                      {el.disabled ? (
                        <Lock className={styles.Mobile__lock} />
                      ) : (
                        <div className={styles.Mobile__rhombus}>
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      )}
                      <p dangerouslySetInnerHTML={{ __html: el.text }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.Mobile__titleWrapper}>
        <div className={styles.Mobile__button}>
          Приобрести
          <div className={styles.Mobile__priceWrapper}>
            <span className={styles.Mobile__dollar}>
              <Dollar />
            </span>
            <div className={styles.Mobile__priceCarousel}>
              <div className={styles.Mobile__price} ref={buttonRef}>
                {TARIFF_LIST.map((tariff, index) => (
                  <div
                    key={tariff.id}
                    className={cn(styles.Mobile__amount, {
                      [styles.Mobile__amount_active]: index === activeSlide,
                    })}
                  >
                    {tariff.price}
                    <span>.00</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

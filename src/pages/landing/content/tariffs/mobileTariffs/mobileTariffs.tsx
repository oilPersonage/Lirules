import { useEffect, useRef, useState } from 'react';

import Dollar from '@icons/dollar.svg';
import Lock from '@icons/lock.svg';
import cn from 'classnames';

import { LandingTitle } from '@components/LandingTitle';

import { onTouchDetect } from '@pages/landing/content/about/сarousel/touchEvent';
import { TARIFF_LIST } from '@pages/landing/content/tariffs/const';

import styles from './styles.scss';

const PRICE_HEIGHT = 24;

export function MobileTariffs() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const refTouch = useRef(new onTouchDetect());

  function onTouch(event) {
    const { isMoveToX, dist, direction } = refTouch.current.onTouch(event);

    if (isMoveToX && dist > 10 && carouselRef.current && !isAnimate) {
      setIsAnimate(true);
      setActiveSlide((v) =>
        v + direction < 0 || v + direction > TARIFF_LIST.length - 1 ? v : v + direction
      );
      setTimeout(() => {
        setIsAnimate(false);
      }, 300);
    }
  }

  useEffect(() => {
    const width = document.body.clientWidth;
    if (carouselRef.current && buttonRef.current) {
      carouselRef.current.style.transform = `translateX(-${width * activeSlide}px)`;
      buttonRef.current.style.transform = `translateY(-${PRICE_HEIGHT * activeSlide}px)`;
    }
  }, [carouselRef, activeSlide, buttonRef]);

  const activeLinkText = TARIFF_LIST.find((tariff, index) => index === activeSlide)?.text;

  return (
    <div className={styles.Mobile__wrapper}>
      <div className={styles.Mobile__titleWrapper}>
        <LandingTitle title="Tariff" colorText="s" />
      </div>
      <div className={styles.Mobile__imageWrapper}>
        {TARIFF_LIST.map((tariff, index) => (
          <div
            className={cn(styles.Mobile__relative, {
              [styles.Mobile__nextImg]: index > activeSlide,
              [styles.Mobile__prevImg]: index < activeSlide,
            })}
          >
            <div className={styles.Mobile__imgDefault}>
              <img
                className={styles.Mobile__imageBase}
                src={tariff.mobileImg}
                loading="lazy"
                alt="Любопытный"
              />
            </div>

            {/*<div className={styles.Mobile__imageEffect}>*/}
            {/*  <img src={tariff.img} loading="lazy" alt="Любопытный" />*/}
            {/*</div>*/}
            {/*<div className={styles.Mobile__imageEffect2}>*/}
            {/*  <img src={tariff.img} loading="lazy" alt="Любопытный" />*/}
            {/*</div>*/}
          </div>
        ))}
      </div>
      <div className={styles.Mobile} onTouchStart={onTouch} onTouchMove={onTouch}>
        <div className={styles.Mobile__carousel} ref={carouselRef}>
          {TARIFF_LIST.map((tariff) => (
            <div key={tariff.id} className={styles.Mobile__item}>
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
        <a href={activeLinkText} target="_blank" className={styles.Mobile__button} rel="noreferrer">
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
        </a>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';

import Dollar from '@icons/dollar.svg';
import Lock from '@icons/lock.svg';
import mobileImg from '@images/landing/mobileTariffs.jpg';
import cn from 'classnames';

import { Button } from '@components/Button';
import { LandingTitle } from '@components/LandingTitle';

import { onTouchDetect } from '@pages/landing/content/about/сarousel/touchEvent';
import { TARIFF_LIST } from '@pages/landing/content/tariffs/const';

import styles from './styles.scss';

const PRICE_HEIGHT = 24;

const classImages = {
  0: styles.Mobile__img0,
  1: styles.Mobile__img1,
  2: styles.Mobile__img2,
};

export function MobileTariffs() {
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.Mobile__wrapper}>
      <div className={styles.Mobile__titleWrapper}>
        <LandingTitle title="Tariff" colorText="s" />
      </div>
      <div className={styles.Mobile}>
        <div className={styles.Mobile__carousel}>
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
              <div className={styles.Mobile__button}>
                <Button type="accent">Приобрести {tariff.price}$</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

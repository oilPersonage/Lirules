import { useState } from 'react';

import cn from 'classnames';

import { Button } from '@components/Button';

import { TARIFF_LIST } from './const';
import styles from './styles.scss';

export function Tariffs() {
  return (
    <div className={styles.Tariffs}>
      {TARIFF_LIST.map((tariff, index) => (
        <div key={index} className={styles.Tariffs__item}>
          <div className={styles.Tariffs__imageWrapper}>
            <img
              className={styles.Tariffs__imageBase}
              src={tariff.img}
              loading="lazy"
              alt="Любопытный"
            />
            <div className={styles.Tariffs__imageEffect}>
              <img src={tariff.img} loading="lazy" alt="Любопытный" />
            </div>
            <div className={styles.Tariffs__imageEffect2}>
              <img src={tariff.img} loading="lazy" alt="Любопытный" />
            </div>
          </div>
          <div className={styles.Tariffs__textWrapper}>
            <div className={styles.Tariffs__title}>
              <p className={styles.Tariffs__titleWhite}>{tariff.title}</p>
              <p className={styles.Tariffs__titleAccent}>{tariff.colorize}</p>
            </div>
            <p>{tariff.description}</p>

            <ul className={styles.Tariffs__list}>
              <li className={styles.Tariffs__listItem}>123123213</li>
              <li className={styles.Tariffs__listItem}>123123213</li>
              <li className={styles.Tariffs__listItem}>123123213</li>
              <li className={styles.Tariffs__listItem}>123123213</li>
              <li className={styles.Tariffs__listItem}>123123213</li>
            </ul>
          </div>
          <div className={styles.Tariffs__button}>
            <Button type="accent">Приобрести</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

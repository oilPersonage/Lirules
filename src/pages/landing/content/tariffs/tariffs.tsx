import { useMobileDetect } from '@hooks/useMobileDetect';
import Dollar from '@icons/dollar.svg';
import cn from 'classnames';

import { Button } from '@components/Button';

import { ILandingPage } from '@pages/landing/content/content';
import { MobileTariffs } from '@pages/landing/content/tariffs/mobileTariffs/mobileTariffs';

import { TARIFF_LIST } from './const';
import styles from './styles.scss';

export function Tariffs({ index, id }: ILandingPage) {
  const isMobile = useMobileDetect();

  return isMobile ? (
    <div id={id}>
      <MobileTariffs />
    </div>
  ) : (
    <div className={styles.Tariffs} id={id}>
      {TARIFF_LIST.map((tariff) => (
        <div key={tariff.id} className={styles.Tariffs__item}>
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
              {tariff.list.map((el, index) => (
                <li
                  key={index}
                  className={cn(styles.Tariffs__listItem, {
                    [styles.Tariffs__listItem_disabled]: el.disabled,
                  })}
                >
                  <div className={styles.Tariffs__rhombus}>
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: el.text }} />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.Tariffs__buttonWrapper}>
            <a
              href={tariff.text}
              target="_blank"
              className={styles.Tariffs__button}
              rel="noreferrer"
            >
              <Button size="lg" type="accent">
                <div className={styles.Tariffs__buttonContent}>
                  Приобрести
                  <div className={styles.Tariffs__priceWrapper}>
                    <span className={styles.Tariffs__dollar}>
                      <Dollar />
                    </span>
                    <div className={styles.Tariffs__price}>
                      {tariff.price}
                      <span>.00</span>
                    </div>
                  </div>
                </div>
              </Button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

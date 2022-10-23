import { useToggle } from '@hooks/useToggle';
import Dollar from '@icons/dollar.svg';
import cn from 'classnames';

import { Button } from '@components/Button';
import { Modal } from '@components/Modal';

import { TARIFF_LIST } from './const';
import styles from './styles.scss';

export function Tariffs() {
  const isMobile = window.innerWidth < 600;
  const { isOpen, toggle } = useToggle();

  return (
    <div className={styles.Tariffs}>
      {TARIFF_LIST.map((tariff, index) => (
        <div
          key={index}
          className={cn(styles.Tariffs__item, { [styles.Tariffs__item_mobile]: isMobile })}
        >
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
            <div className={styles.Tariffs__button}>
              <Button
                onClick={toggle}
                size={isMobile ? 'sm' : 'lg'}
                type={isMobile ? 'outline' : 'accent'}
              >
                <div className={styles.Tariffs__buttonContent}>
                  {isMobile ? 'Подробнее' : 'Приобрести'}
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
            </div>
          </div>
        </div>
      ))}
      <Modal isShowing={isOpen} hide={toggle}>
        <p>Content</p>
      </Modal>
    </div>
  );
}

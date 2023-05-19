import { RefObject } from 'react';

import cn from 'classnames';

import { DispatchState } from '@utils/typeguard';

import { HandleNextPage } from '@pages/guide/types';

import styles from './styles.scss';

export type NavigationProps = {
  handleNextScreen: HandleNextPage;
  isStartAnimate: boolean;
};

export function Navigation({ handleNextScreen, isStartAnimate }: NavigationProps) {
  return (
    <div className={cn(styles.Navigation, { [styles.Navigation__startAnimation]: isStartAnimate })}>
      <div className={styles.Navigation__goBack} onClick={() => handleNextScreen({ isBack: true })}>
        <span>
          <svg
            width="55"
            height="6"
            viewBox="0 0 55 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M51 5.5L55 3L51 0.5V5.5Z" fill="white" />
            <path d="M47 3L0 3" stroke="white" />
          </svg>
        </span>
        <p>Назад</p>
      </div>
      <div className={styles.Navigation__nextCountry}>
        Турция
        <span>
          <svg
            width="55"
            height="6"
            viewBox="0 0 55 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M51 5.5L55 3L51 0.5V5.5Z" fill="white" />
            <path d="M47 3L0 3" stroke="white" />
          </svg>
        </span>
      </div>
    </div>
  );
}

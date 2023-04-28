import { RefObject } from 'react';

import { DispatchState } from '@utils/typeguard';

import { HandleNextPage } from '@pages/guide/types';

import styles from './styles.scss';

export type NavigationProps = {
  handleNextScreen: HandleNextPage;
};

export function Navigation({ handleNextScreen }: NavigationProps) {
  return (
    <div className={styles.Navigation}>
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

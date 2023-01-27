import { useState } from 'react';

import cn from 'classnames';

import { Row } from '@components/Grid/grid';
import { LandingTitle } from '@components/LandingTitle';

import { onChangeCursorDot } from '@utils/onChangeCursorDot';

import { IReviews, Reviews } from '@pages/landing/content/cases/data';
import { ILandingPage } from '@pages/landing/content/content';

import styles from './styles.scss';

export function Cases({ index, id }: ILandingPage) {
  return (
    <div id={id} className={styles.Cases}>
      <Row column>
        <LandingTitle title="REVIEW" colorText="S" />

        <ul className={styles.Cases__list}>
          {Reviews.map((el) => (
            <li key={el.id} className={styles.Cases__item}>
              <div className={styles.Cases__headingWrapper}>
                <div className={styles.Cases__img}>
                  <img src={el.img} alt="img" />
                </div>
                <div className={styles.Cases__heading}>
                  <p className={styles.Cases__name}>
                    {el.name} <span>{el.instagram}</span>
                  </p>
                  <p className={styles.Cases__title}>{el.heading}</p>
                  <p className={styles.Cases__star}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <div className={styles.Cases__text}>{el.text}</div>
            </li>
          ))}
        </ul>
      </Row>
    </div>
  );
}
